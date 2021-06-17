import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopCart: [],
    };
    this.handleAddToShopCart = this.handleAddToShopCart.bind(this);
    this.handleRemoveItemFromCart = this.handleRemoveItemFromCart.bind(this);
    this.handleIncreaseItemAmount = this.handleIncreaseItemAmount.bind(this);
    this.handleDecreaseItemAmount = this.handleDecreaseItemAmount.bind(this);
  }

  handleAddToShopCart(id, title, thumbnail, price) {
    this.setState((state) => ({
      shopCart: [...state.shopCart, { id, title, thumbnail, price, amount: 1 }],
    }));
  }

  handleRemoveItemFromCart(itemId) {
    const { shopCart } = this.state;
    const updatedCart = shopCart.filter((item) => item.id !== itemId);
    this.setState({ shopCart: updatedCart });
  }

  handleIncreaseItemAmount(itemId) {
    const { shopCart } = this.state;
    const itemIndex = shopCart.findIndex((item) => item.id === itemId);
    const updatedCart = [...shopCart];
    updatedCart[itemIndex].amount += 1;
    this.setState({ shopCart: updatedCart });
  }

  handleDecreaseItemAmount(itemId) {
    const { shopCart } = this.state;
    const itemIndex = shopCart.findIndex((item) => item.id === itemId);
    const updatedCart = [...shopCart];

    if (updatedCart[itemIndex].amount > 1) {
      updatedCart[itemIndex].amount -= 1;
    }

    this.setState({ shopCart: updatedCart });
  }

  render() {
    const { shopCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/details" component={ ProductDetails } />
          <Route
            exact
            path="/ShoppingCart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                shopCart={ shopCart }
                handleRemoveItemFromCart={ this.handleRemoveItemFromCart }
                handleIncreaseItemAmount={ this.handleIncreaseItemAmount }
                handleDecreaseItemAmount={ this.handleDecreaseItemAmount }
              />
            ) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                handleAddToShopCart={ this.handleAddToShopCart }
                shopCart={ shopCart }
              />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
