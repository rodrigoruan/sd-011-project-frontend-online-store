import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link
          to="/shoppingCart"
          alt="shopping-cart"
          data-testid="shopping-cart-button"
        >
          carrinho

        </Link>
      </div>);
  }
}

export default CartButton;
