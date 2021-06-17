import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <header className="cartHeader">
          <Link to="/" className="LinkBack">Voltar</Link>
        </header>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}
