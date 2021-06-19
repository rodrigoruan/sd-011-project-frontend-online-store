import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './css/searchlist.css';
import './css/home.css';
import * as api from './services/api';
// import * as storage from './services/storage';

import { About,
  NotFound,
  ShoppingCart,
  Home,
  Checkout,
  ProductDetails } from './pages/zPageMenu';
import { Header } from './components/zComponentsMenu';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: '',
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
  }

  // handleAddToCart(id, thumbnail, title, price, quantity) {
  handleAddToCart(item) {
    const quantity = 1;
    const { id, title, thumbnail, price } = item;
    const { shoppingCart } = this.state;
    const oldItems = [...shoppingCart];
    const newItem = { id, title, thumbnail, price, quantity };
    const itemExists = oldItems.find((el) => el.id === id);
    if (itemExists) {
      const updatedItem = { id,
        title,
        thumbnail,
        price,
        quantity: itemExists.quantity + 1 };
      const updatedShoppingCart = oldItems.map((el) => (el.id === id ? updatedItem : el));
      return this.setState({ shoppingCart: [...updatedShoppingCart] });
    }
    this.setState({ shoppingCart: [...oldItems, newItem] });
  }

  handleDecreaseQuantity = (item) => {
    const { id, title, thumbnail, price } = item;
    const { shoppingCart } = this.state;
    const oldItems = [...shoppingCart];
    const itemExists = oldItems.find((el) => el.id === id);
    if (itemExists && itemExists.quantity > 1) {
      const updatedItem = { id,
        title,
        thumbnail,
        price,
        quantity: itemExists.quantity - 1 };
      const updatedShoppingCart = oldItems.map((el) => (el.id === id ? updatedItem : el));
      return this.setState({ shoppingCart: [...updatedShoppingCart] });
    }
    if (itemExists && itemExists.quantity === 1) {
      const updatedShoppingCart = oldItems.filter((el) => el.id !== id);
      return this.setState({ shoppingCart: [...updatedShoppingCart] });
    }
  };

  handleRemoveFromCart = (id) => {
    const { shoppingCart } = this.state;
    const oldItems = [...shoppingCart];
    const itemExists = oldItems.find((el) => el.id === id);
    if (itemExists) {
      const updatedShoppingCart = oldItems.filter((el) => el.id !== id);
      return this.setState({ shoppingCart: [...updatedShoppingCart] });
    }
  };

  render() {
    const { shoppingCart } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/* prettier-ignore */}
          <Route
            exact
            path="/"
            render={
              (props) => <Home { ...props } handleAddToCart={ this.handleAddToCart } />
            }
          />
          <Route
            path="/details/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              handleAddToCart={ this.handleAddToCart }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                cartItems={ shoppingCart }
                handleRemoveFromCart={ this.handleRemoveFromCart }
                handleDecreaseQuantity={ this.handleDecreaseQuantity }
                handleAddToCart={ this.handleAddToCart }
              />
            ) }
          />
          <Route exact path="/about" component={ About } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route component={ NotFound } />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}
