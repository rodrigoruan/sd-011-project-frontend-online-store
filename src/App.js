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
  }

  handleAddToShopCart(title, thumbnail, price) {
    this.setState((state) => ({
      shopCart: [...state.shopCart, { title, thumbnail, price, amount: 1 }],
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/details" component={ ProductDetails } />
          <Route
            exact
            path="/ShoppingCart"
            render={ (props) => <ShoppingCart { ...props } shopCart={ shopCart } /> }
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
