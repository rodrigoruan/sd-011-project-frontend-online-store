import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCartButton extends Component {
  render() {
    const { addCart, title, price, id } = this.props;
    return (
      <button
        data-testid="product-add-to-cart"
        type="button"
        onClick={ addCart }
        name={ title }
        value={ price }
        id={ id }
      >
        ADICIONAR AO CARRINHO
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  addCart: PropTypes.func,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
