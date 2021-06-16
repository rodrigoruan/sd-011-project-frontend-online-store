import React, { Component } from 'react';

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
    const { func } = this.props;
    this.searchApi(func);
  }

  searchApi(products) {
    this.setState({ products });
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
