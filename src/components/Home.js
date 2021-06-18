import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListCards from './ListCards';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import TopBar from './TopBar';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: ' ',
      category: 'MLB1648',
      products: undefined,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.searchApi = this.searchApi.bind(this);
  }

  componentDidMount() {
    this.searchApi();
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
      console.log('products', products);
      products = products.results
        .map(({ title, id, price, thumbnail, attributes, shipping }) => (
          { title, id, price, thumbnail, attributes, shipping }
        ));
      this.setState({ products });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { products, query, category, cartItems } = this.state;
    return (
      <div>
        <TopBar handleOnChange={ this.handleOnChange } />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <ListCards
                products={ products }
                category={ category }
                query={ query }
              />
            ) }
          />
          <Route
            path="/ShoppingCart"
            render={ () => (<ShoppingCart cartItems={ cartItems } />) }
          />
          <Route
            path="/product/:ProductId"
            render={ (props) => (
              <ProductDetails
                { ...props }
                query={ query }
                category={ category }
              />
            ) }
          />
        </Switch>
      </div>
    );
  }
}
