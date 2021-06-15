import React, { Component } from 'react';

export default class CartItems extends Component {
  render() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}
