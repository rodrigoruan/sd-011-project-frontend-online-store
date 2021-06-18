import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCartButton extends Component {
  render() {
    const { addItemToCart, product, testid } = this.props;

    return (
      <button
        type="button"
        data-testid={ testid }
        onClick={ () => addItemToCart(product) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
    availableQuantity: PropTypes.number,
    soldQuantity: PropTypes.string,
    installments: PropTypes.shape({
      quantity: PropTypes.number,
      amount: PropTypes.number,
    }),
    price: PropTypes.number,
  }),
  addItemToCart: PropTypes.func,
  testid: PropTypes.string,
}.isRequired;
