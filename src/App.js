import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.getCartItems = this.getCartItems.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  getCartItems() {
    const { cart } = this.state;
    return cart;
  }

  addProductToCart({ target: { value } }) {
    const obj = JSON.parse(value);
    this.setState((prevState) => ({
      cart: [...prevState.cart, obj],
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home addToCart={ this.addProductToCart } getCart={ this.getCartItems } />
          </Route>
          <Route path="/cart">
            <Cart getCart={ this.getCartItems } />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
