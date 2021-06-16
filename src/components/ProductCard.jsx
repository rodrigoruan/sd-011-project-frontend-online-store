import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {

  render() {
    const { product: { title, price, thumbnail, attributes } } = this.props;
    return (
      <div data-testid="product">
        <h4 data-testid="product-detail-name">{title}</h4>
        <p>{`R$ ${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        {/* <p>{attributes}</p> */}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    attributes: PropTypes.string,
  }).isRequired,
};
