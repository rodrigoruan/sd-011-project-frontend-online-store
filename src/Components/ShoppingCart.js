import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </div>
    );
  }
}

export default ShoppingCart;
