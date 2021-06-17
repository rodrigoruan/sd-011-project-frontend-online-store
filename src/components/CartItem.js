import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { productInfo } = this.props;
    const { title, thumbnail, price } = productInfo;
    return (
      <div>
        <h5 data-testid="shopping-cart-product-name">{ title }</h5>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
      </div>
    );
  }
}

CartItem.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
