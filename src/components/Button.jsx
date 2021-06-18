import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    if (localStorage.getItem('product')) {
      const storage = JSON.parse(localStorage.getItem('product'));
      localStorage.setItem('product', JSON.stringify([...storage, product]));
    } else {
      localStorage.setItem('product', JSON.stringify([product]));
    }
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
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
};
