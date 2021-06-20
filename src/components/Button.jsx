import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    const productAsString = JSON.stringify(product);

    if (localStorage.getItem(productAsString)) {
      const quantityAsString = Object.values(localStorage.getItem(productAsString));
      const itemQuantity = parseInt(quantityAsString, 10);
      localStorage.setItem(JSON.stringify(product), itemQuantity + 1);
    } else {
      localStorage.setItem(productAsString, 1);
    }
  }

  render() {
    const { testid } = this.props;
    return (
      <button
        type="button"
        data-testid={ testid }
        onClick={ this.addToCart }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

Button.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  testid: PropTypes.string.isRequired,
};
