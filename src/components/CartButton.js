import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartButton extends Component {
  render() {
    return (
      <nav>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho
        </Link>
      </nav>
    );
  }
}
