import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormComment from '../component/FormComment';
import Comments from '../component/Comments';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      commnets: [],
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
      <>
        <div data-testid="product-detail-name">{ product.title }</div>
        <div data-testid="product-detail-evaluation">
          <FormComment idPrd={ product.id } />
          <Comments />
        </div>
      </>
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
