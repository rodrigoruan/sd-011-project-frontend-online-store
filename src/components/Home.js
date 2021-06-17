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
      products = products.results.map(({ title, id, price, thumbnail, attributes }) => (
        { name: title, id, price, thumbnail, attributes }
      ));
      this.setState({ products });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { products, query, category } = this.state;
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
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route
            path="/product/:id"
            render={ (props) => (
              <ProductDetails { ...props } query={ query } category={ category } />
            ) }
          />
        </Switch>
      </div>
    );
  }
}
