import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends Component {
  render() {
    return (

      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <button type="button">
          <img src="/img/shopping-cart.svg" alt="View shopping cart" />
          <span
            data-testid="shopping-cart-size"
          >
            3
          </span>
        </button>
      </Link>

    );
  }
}
