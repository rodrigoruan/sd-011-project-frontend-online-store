import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}
