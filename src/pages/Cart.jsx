import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}
