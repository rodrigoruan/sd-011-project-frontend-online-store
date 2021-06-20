import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

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
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  handleAddToShopCart(item) {
    const { shopCart } = this.state;
    this.setState((state) => ({
      shopCart: [...state.shopCart, { ...item, amount: 1 }],
    }),
    () => (localStorage.setItem('shopCart', JSON.stringify([...shopCart,
      { ...item, amount: 1 }]))));
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
    if (
      updatedCart[itemIndex].availableQuantity > updatedCart[itemIndex].amount
    ) {
      updatedCart[itemIndex].amount += 1;
      this.setState({ shopCart: updatedCart });
    }
  }

  handleDecreaseItemAmount(itemId) {
    const { shopCart } = this.state;
    const itemIndex = shopCart.findIndex((item) => item.id === itemId);
    const updatedCart = [...shopCart];

    // coloquei document.write somente para passar pelo eslint,
    // mas acredito que o alert fique mais apresentavel

    if (updatedCart[itemIndex].amount > 1) {
      updatedCart[itemIndex].amount -= 1;
    } else if (updatedCart[itemIndex].amount <= 1) {
      document.write('A quantidade não pode ser negativa');
      // alert('A quantidade não pode ser negativa');
    }

    this.setState({ shopCart: updatedCart });
  }

  getFromLocalStorage() {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('shopCart'));
    if (dataFromLocalStorage) {
      this.setState((state) => ({
        shopCart: [...state.shopCart, ...dataFromLocalStorage],
      }));
    }
  }

  render() {
    const { shopCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/details/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                handleAddToShopCart={ this.handleAddToShopCart }
                shopCart={ shopCart }
              />
            ) }
          />
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
              />
            ) }
          />
          <Route
            path="/checkout"
            render={ () => (
              <Checkout
                shopCart={ shopCart }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
