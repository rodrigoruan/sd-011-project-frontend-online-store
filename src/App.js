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
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

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
              />) }
            />
            <Route
              path="/product-details/:id"
              render={ () => (<ProductDetailsPage
                addToCart={ this.addToCart }
                selectedProduct={ selectedProduct }
              />) }
            />
            <Route
              path="/checkout" render={ () => <CheckoutPage cart={ cart } /> }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
