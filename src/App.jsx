import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import * as api from './services/api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: { results: [] },
      categories: [],
      shoppingCart: [],
    };

    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount() {
    this.defineStateCategories();
  }

  addItemToCart(product) {
    this.setState(({ shoppingCart }) => {
      product.quantity = 1;
      const newShoppingCart = [...shoppingCart, product];
      return { shoppingCart: newShoppingCart };
    });
  }

  updateQuantity(product, delta) {
    this.setState(({ shoppingCart }) => {
      const newShoppingCart = shoppingCart.map((item) => {
        const newItem = { ...item };
        if (newItem.id === product.id) {
          const min = 1;
          const max = newItem.available_quantity;
          const newQuantity = newItem.quantity + delta;
          newItem.quantity = Math.max(Math.min(newQuantity, max), min);
          return newItem;
        }
        return newItem;
      });
      return {
        shoppingCart: newShoppingCart,
      };
    });
  }

  removeItemFromCart(id) {
    this.setState(({ shoppingCart }) => ({
      shoppingCart: shoppingCart.filter((product) => product.id !== id),
    }));
  }

  async defineStateCategories() {
    try {
      const categories = await api.getCategories();
      this.setState({ categories });
    } catch (err) {
      console.error(err);
    }
  }

  updateSearchResults(searchResults) {
    this.setState({ searchResults });
  }

  render() {
    const { categories, searchResults, shoppingCart } = this.state;

    return (
      <>
        <header>Frontend Online Store</header>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (<Home
                searchResults={ searchResults }
                updateSearchResults={ this.updateSearchResults }
                categories={ categories }
                addItemToCart={ this.addItemToCart }
              />) }
            />
            <Route
              path="/cart"
              render={ () => (<Cart
                updateQuantity={ this.updateQuantity }
                removeItemFromCart={ this.removeItemFromCart }
                productList={ shoppingCart }
              />) }
            />
          </Switch>
        </BrowserRouter>
        <footer>Feito pelo Grupo 14, o grupo brabo</footer>
      </>
    );
  }
}

export default App;
