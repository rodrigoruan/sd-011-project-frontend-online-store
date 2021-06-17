import React, { Component } from 'react';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(id)
    api.getProductsFromCategoryAndQuery(false, id).then((product) => console.log(product));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
      </div>
    );
  }
}
