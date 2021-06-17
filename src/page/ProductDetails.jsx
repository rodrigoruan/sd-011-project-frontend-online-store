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
    this.searchI(id);
    // api.getProductsFromCategoryAndQuery('', id).then((product) => console.log(product));
  }

  render() {
    const { product } = this.state;
    const { location: { state } } = this.props;
    console.log(state);
    return (
      <div>
      </div>
    );
  }
}
