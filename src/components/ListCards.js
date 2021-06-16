import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';

export default class ListCards extends Component {
  constructor() {
    super();

    this.searchApi = this.searchApi.bind(this);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.searchApi();
  }

  async searchApi(props) {
    const { query, category } = props;
    console.log(props);
    const products = await getProductsFromCategoryAndQuery(query, category);
    console.log(products);
    this.setState(products);
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        { products.map((product, key) => (
          <Card { ...product } key={ key } />
        )) }
      </div>
    );
  }
}
