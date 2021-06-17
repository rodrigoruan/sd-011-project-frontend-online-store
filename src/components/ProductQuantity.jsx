import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductQuantity extends Component {
  render() {
    const { quantity, increaseQuantity, decreaseQuantity } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ decreaseQuantity }
        >
          -
        </button>
        <strong data-testid="shopping-cart-product-quantity">{quantity}</strong>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ increaseQuantity }
        >
          +
        </button>
      </div>
    );
  }
}

ProductQuantity.propTypes = {
  quantity: PropTypes.number,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
}.isRequired;
