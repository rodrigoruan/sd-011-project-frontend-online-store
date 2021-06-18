import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShopCart from './components/ShopCart';
/* import ProductCard from './components/ProductCard'; */
import ProductDetails from './components/ProductDetails';
import * as fetchAPI from './services/api';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productCards: [],
      categoryId: '',
      search: '',
      cartItems: [],
    };
    this.fetchProductCategory = this.fetchProductCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.addCart = this.addCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
  }

  componentDidMount() {
    this.fetchProductCategory();
  }

  // componentDidUpdate() {
  //   this.removeCartItem();
  // }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProducts() {
    const { categoryId, search } = this.state;
    const fetchedProducts = await
    fetchAPI.getProductsFromCategoryAndQuery(categoryId, search);
    // console.log(fetchedProducts.results);
    this.setState({ productCards: fetchedProducts.results });
  }

  async fetchProductCategory() {
    const fetchedCategories = await fetchAPI.getCategories();
    this.setState({
      categories: fetchedCategories,
    });
  }

  async fetchCategories(id) {
    const fetchedProductsFromCategories = await
    fetchAPI.getProductsFromCategoryAndQuery(id);
    this.setState({
      productCards: fetchedProductsFromCategories.results,
      categoryId: id,
    });
  }

  addCart({ target: { value } }) {
    const { productCards, cartItems } = this.state;
    const itemToCart = productCards.find((item) => item.id === value);
    this.setState({
      cartItems: [...cartItems, itemToCart],
    });
  }

  removeCartItem({ target: { value } }) {
    const { cartItems } = this.state;
    console.log(value);
    const updateCart = cartItems.filter(({ id }) => id !== value);
    console.log(updateCart);
    this.setState({
      cartItems: updateCart,
    });
    console.log(cartItems);
    // const index = cartItems.includes(value);
    // console.log(cartItems[index]);
  }

  render() {
    const { categories, productCards, cartItems } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (
                <Home
                  handleChange={ this.handleChange }
                  fetchProducts={ this.fetchProducts }
                  fetchCategories={ this.fetchCategories }
                  addCart={ this.addCart }
                  categories={ categories }
                  productCards={ productCards }
                  cartItems={ cartItems }
                />) }
            />
            <Route
              path="/cart"
              render={ (props) => (<ShopCart
                removeCartItem={ this.removeCartItem }
                cartItems={ cartItems }
                { ...props }
              />) }
            />
            <Route
              path="/details/:id"
              render={ (props) => (<ProductDetails
                cartItems={ cartItems }
                addCart={ this.addCart }
                { ...props }
              />) }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
