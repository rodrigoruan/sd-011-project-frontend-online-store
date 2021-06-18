import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListCards from './ListCards';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import TopBar from './TopBar';
import CheckoutPage from './CheckoutPage';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: ' ',
      category: 'MLB1648',
      products: undefined,
      totalCounter: 0,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.searchApi = this.searchApi.bind(this);
    this.someCounter = this.someCounter.bind(this);
  }

  componentDidMount() {
    this.searchApi();
    this.cartMount();
  }

  async handleOnChange({ target }) {
    const { name, value } = target;
    await this.setState(({ [name]: value }));
    this.searchApi();
  }

  async searchApi() {
    this.setState({ products: undefined });
    const { query, category } = this.state;
    try {
      let products = await getProductsFromCategoryAndQuery(category, query);
      products = products.results.map(({ title, id, price, thumbnail, attributes }) => (
        { title, id, price, thumbnail, attributes }
      ));
      this.setState({ products });
    } catch (error) {
      console.error(error);
    }
  }

  someCounter() {
    const cart = JSON.parse(localStorage.ShoppingCart);
    const totalCounter = cart.reduce(((total, number) => {
      total += number.counter;
      return total;
    }), 0);
    this.setState({ totalCounter });
  }

  cartMount() {
    if (!localStorage.ShoppingCart) {
      localStorage.setItem('ShoppingCart', JSON.stringify([]));
    }
  }

  render() {
    const { products, query, category, totalCounter } = this.state;
    return (
      <div>
        <TopBar handleOnChange={ this.handleOnChange } totalCounter={ totalCounter } />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <ListCards
                products={ products }
                category={ category }
                query={ query }
                someCounter={ this.someCounter }
              />
            ) }
          />
          <Route
            path="/ShoppingCart"
            render={ () => (
              <ShoppingCart someCounter={ this.someCounter } />) }
          />
          <Route
            path="/ShoppingCart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                someCounter={ this.someCounter }
              />
            ) }
          />
          <Route
            path="/product/:ProductId"
            render={ (props) => (
              <ProductDetails
                { ...props }
                query={ query }
                category={ category }
                someCounter={ this.someCounter }
              />
            ) }
          />
          <Route to="/CheckoutPage" component={ CheckoutPage } />
        </Switch>
      </div>
    );
  }
}
