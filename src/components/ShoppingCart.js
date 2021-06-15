import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link data-testid="shopping-cart-button" to="/">Voltar</Link>
      </div>
    );
  }
}
