import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormComment from '../component/FormComment';
import Comments from '../component/Comments';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      comments: [],
    };
    this.getProduct = this.getProduct.bind(this);
    this.setCommentarray = this.setCommentarray.bind(this);
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

  setCommentarray(value) {
    const { comments } = this.state;
    this.setState({
      comments: [value, ...comments],
    });
  }

  render() {
    const { product, comments } = this.state;
    return (
      <>
        <div data-testid="product-detail-name">{ product.title }</div>
        <div>
          <FormComment idPrd={ product.id } evBtn={ this.setCommentarray } />
          <Comments idPrd={ product.id } arrayComment={ comments } />
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
