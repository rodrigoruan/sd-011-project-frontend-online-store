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
    this.searchApi(this.props);
  }

  async searchApi(props) {
    const { query, category } = props;
    console.log(props);
    let products = await getProductsFromCategoryAndQuery(query, category);
    products = products.results.map(({ title, id, price }) => (
      { name: title, key: id, price }
    ));
    this.setState(products);
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {
          products.map((name, key, price) => (
            <Card name={ name } key={ key } price={ price } />
          ))
        }
      </div>
    );
  }
}
