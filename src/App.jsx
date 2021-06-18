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
      shoppingCart: {
        totalItemCount: 0,
        itemList: [],
      },
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
    this.setState(({ shoppingCart: { totalItemCount, itemList } }) => {
      product.quantity = 1;

      const newShoppingCart = {
        totalItemCount: totalItemCount + 1,
        itemList: [...itemList, product],
      };

      return { shoppingCart: newShoppingCart };
    });
  }

  updateQuantity(product, delta) {
    this.setState(({ shoppingCart: { totalItemCount, itemList } }) => {
      const newShoppingCart = { totalItemCount };

      newShoppingCart.itemList = itemList.map((item) => {
        const newItem = { ...item };
        if (newItem.id === product.id) {
          const min = 1;
          const max = newItem.available_quantity;
          const previousQuantity = newItem.quantity;
          const newQuantity = newItem.quantity + delta;
          newItem.quantity = Math.max(Math.min(newQuantity, max), min);

          const totalDelta = newQuantity - previousQuantity;
          newShoppingCart.totalItemCount += totalDelta;
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
    this.setState(({ shoppingCart: { totalItemCount, itemList } }) => {
      const newShoppingCart = { totalItemCount };

      newShoppingCart.itemList = itemList.filter((item) => {
        if (item.id === id) {
          newShoppingCart.totalItemCount -= item.quantity;
          return false;
        }
        return true;
      });

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
    const { totalItemCount } = shoppingCart;

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
                totalItemCount={ totalItemCount }
              />) }
            />

            <Route
              path="/cart"
              render={ () => (<Cart
                updateQuantity={ this.updateQuantity }
                removeItemFromCart={ this.removeItemFromCart }
                shoppingCart={ shoppingCart }
              />) }
            />

            <Route
              path="/product/:id"
              render={ (props) => (<Product
                addItemToCart={ this.addItemToCart }
                totalItemCount={ totalItemCount }
                { ...props }
              />) }
            />
          </Switch>
        </BrowserRouter>
        <footer>
          <p>Feito pelo Grupo 14, o grupo brabo</p>
          <p>
            Ícones por&nbsp;
            <a href="https://freeicons.io/profile/730">anumithun</a>
            &nbsp;do&nbsp;
            <a href="https://freeicons.io">freeicons.io</a>
          </p>
        </footer>
      </>
    );
  }
}

export default App;
