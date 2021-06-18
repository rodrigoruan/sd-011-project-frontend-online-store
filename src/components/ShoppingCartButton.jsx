import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends Component {
  render() {
    return (

      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <button type="button">ver carrinho</button>
      </Link>

    );
  }
}
