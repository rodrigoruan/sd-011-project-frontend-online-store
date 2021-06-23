import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      crrCategory: '',
      selectedProduct: {},
      products: [],
      loading: true,
      searchText: '',
      cart: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleInputChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ searchText: text }));
  }

  handleSearchClick = () => {
    const { crrCategory, searchText } = this.state;
    const id = crrCategory || '';
    const searchTerm = searchText || '';
    this.fetchProducts(id, searchTerm);
  }

  selectedProduct = (product) => {
    this.setState(() => ({
      selectedProduct: product,
    }));
  }

  addToCart = (product) => {
    const { cart } = this.state;
    let newCart = [...cart];
    if (cart.find((item) => item.id === product.id)) {
      const productIndex = newCart.findIndex((item) => item.id === product.id);
      if (newCart[productIndex].amount === newCart[productIndex].available_quantity) {
        console.log('Número máximo');
      } else {
        newCart[productIndex].amount += 1;
        console.log(newCart[productIndex].amount);
      }
    } else {
      newCart = [...cart, { ...product, amount: 1 }];
    }
    this.setState({
      cart: newCart,
    });
  }

  decreaseFromCart = (product) => {
    const { cart } = this.state;
    let newCart = [...cart];
    if (cart.find((item) => item.id === product.id)) {
      const productIndex = newCart.findIndex((item) => item.id === product.id);
      if (newCart[productIndex].amount > 0) {
        newCart[productIndex].amount -= 1;
      }
      if (newCart[productIndex].amount === 0) {
        newCart = newCart.filter((item) => item.id !== newCart[productIndex].id);
      }
    } else {
      newCart = [...cart, { ...product, amount: 1 }];
    }
    this.setState({
      cart: newCart,
    });
  }

  getCartSize = () => {
    const { cart } = this.state;
    return cart.reduce((acc, product) => {
      acc += product.amount;
      return acc;
    }, 0);
  }

  removeFromCart = (product) => {
    const { cart } = this.state;
    const filteredOutProduct = cart.filter((item) => item.id !== product.id);
    this.setState(() => ({
      cart: filteredOutProduct,
    }));
  };

  setCategory = (e) => {
    const { id } = e.target;
    this.setState({
      crrCategory: id,
    });
    this.fetchProducts(id);
  }

  fetchCategories = async () => {
    const getCategories = await api.getCategories();
    this.setState({
      categories: getCategories,
    });
  }

  fetchProducts = async (id, searchText) => {
    this.setState(
      { loading: true },
      async () => {
        const SetProducts = (getProducts) => {
          this.setState({
            products: getProducts.results,
            loading: false,
          });
        };
        const getProducts = await api.getProductsFromCategoryAndQuery(id, searchText);
        SetProducts(getProducts);
      },
    );
  }

  render() {
    const { products, categories, cart, loading, selectedProduct } = this.state;

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (<HomePage
                loading={ loading }
                products={ products }
                categories={ categories }
                addToCart={ this.addToCart }
                getCartSize={ this.getCartSize }
                setCategory={ this.setCategory }
                selectedProduct={ this.selectedProduct }
                handleInputChange={ this.handleInputChange }
                handleSearchClick={ this.handleSearchClick }
              />) }
            />
            <Route
              path="/cart"
              render={ () => (<CartPage
                cart={ cart }
                removeFromCart={ this.removeFromCart }
                addToCart={ this.addToCart }
                decreaseFromCart={ this.decreaseFromCart }
              />) }
            />
            <Route
              path="/product-details/:id"
              render={ () => (<ProductDetailsPage
                addToCart={ this.addToCart }
                getCartSize={ this.getCartSize }
                selectedProduct={ selectedProduct }
              />) }
            />
            <Route
              path="/checkout"
              render={ () => (<CheckoutPage
                cart={ cart }
              />) }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
