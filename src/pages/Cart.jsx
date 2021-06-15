import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default Cart;
