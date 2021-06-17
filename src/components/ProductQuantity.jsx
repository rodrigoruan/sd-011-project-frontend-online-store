import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductQuantity extends Component {
  render() {
    const { quantity, increaseQuantity, decreaseQuantity } = this.props;
    return (
      <div>
        <button type="button" onClick={ decreaseQuantity }> - </button>
        <strong>{quantity}</strong>
        <button type="button" onClick={ increaseQuantity }> + </button>
      </div>
    );
  }
}

ProductQuantity.propTypes = {
  quantity: PropTypes.number,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
}.isRequired;
