import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart, Product } from './pages';
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
              render={ () => <Cart productList={ shoppingCart } /> }
            />
            <Route
              path="/product/:id"
              component={ Product }
            />
          </Switch>
        </BrowserRouter>
        <footer>Feito pelo Grupo 14, o grupo brabo</footer>
      </>
    );
  }
}

export default App;
