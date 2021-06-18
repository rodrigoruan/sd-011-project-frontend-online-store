import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  render() {
    const {
      productData: { thumbnail, title, price },
    } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img height="150px" src={ thumbnail } alt="thumbnail" />
        <span>{price}</span>
        <div data-testid="shopping-cart-product-quantity">1</div>
        <button type="button">-</button>
        <button type="button">+</button>
        <hr />
      </div>
    );
  }
}

CartProduct.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
}.isRequired;
