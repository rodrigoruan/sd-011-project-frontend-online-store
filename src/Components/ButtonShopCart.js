import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShopCart extends Component {
  render() {
    return (
      <Link
        to="/shoppingCart"
        data-testid="shopping-cart-button"
        className="buttonCart"
        type="button"
      >
        Carrinho 🛒
      </Link>
    );
  }
}

export default ButtonShopCart;
