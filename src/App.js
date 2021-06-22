import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ListProducts from './pages/ListProducts';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.getCartItems = this.getCartItems.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.increaseQuantityItem = this.increaseQuantityItem.bind(this);
    this.decreaseQuantityItem = this.decreaseQuantityItem.bind(this);
  }

  getCartItems() {
    const { cart } = this.state;
    return cart;
  }

  addCartItem({ target: { value } }) {
    const obj = JSON.parse(value);
    obj.qtde = 1;
    this.setState((previousState) => ({
      cart: [...previousState.cart, obj],
    }));
  }

  removeCartItem(id) {
    const { cart } = this.state;
    const updatedCart = cart.filter((item) => item.id !== id);
    if (updatedCart.length === 0) {
      this.setState({
        cart: [],
      });
    }
    this.setState({
      cart: updatedCart,
    });
  }

  increaseQuantityItem(id) {
    const { cart } = this.state;
    cart.find((item) => item.id === id).qtde += 1;
    this.setState({ cart });
  }

  decreaseQuantityItem(id) {
    const { cart } = this.state;
    cart.find((item) => item.id === id).qtde -= 1;
    this.setState({ cart });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ListProducts
              addCartItem={ this.addCartItem }
              getCart={ this.getCartItems }
            />
          </Route>
          <Route path="/shoppingCart">
            <ShoppingCart
              getCart={ this.getCartItems }
              removeCartItem={ this.removeCartItem }
              increaseQuantityItem={ this.increaseQuantityItem }
              decreaseQuantityItem={ this.decreaseQuantityItem }
            />
          </Route>
          <Route
            path="/products/:id"
            render={ (props) => (<ProductDetail
              addCartItem={ this.addCartItem }
              getCart={ this.getCartItems }
              { ...props }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
