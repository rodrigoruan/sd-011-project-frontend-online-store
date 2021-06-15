import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div className="container-cart-button">
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho de compras</Link>
      </div>
    );
  }
}

export default CartButton;
