import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './css/searchlist.css';
import './css/home.css';
import * as api from './services/api';
import { getCart } from './services/storage';
import { About, NotFound, ShoppingCart, Home, Checkout, ProductDetails } from './pages/zPageMenu';
import { Header } from './components/zComponentsMenu';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
    };
  }

  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
    getCart();
  }

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
            render={(props) => <ProductDetails {...props} handleAddToCart={this.handleAddToCart} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <ShoppingCart
                {...props}
                cartItems={shoppingCart}
                handleRemoveFromCart={this.handleRemoveFromCart}
                handleDecreaseQuantity={this.handleDecreaseQuantity}
                handleAddToCart={this.handleAddToCart}
              />
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/checkout" component={Checkout} />
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}
