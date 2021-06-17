import React, { Component } from 'react';

export default class EmptyCartLine extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    );
  }
}
