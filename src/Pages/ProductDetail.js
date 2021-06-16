import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;
    const result = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const json = await result.json();
    this.setState({
      product: json,
    });
  }

  render() {
    const { product } = this.state;

    return (
      <div data-testid="product-detail-name">{ product.title }</div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
