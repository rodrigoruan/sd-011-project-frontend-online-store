import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../images/cart.svg';
import backImage from '../images/back.png';

export default class EmptyShopCart extends Component {
  render() {
    return (
      <div>
        <header className="cart-header">
          <h1> Carrinho de Compras </h1>
          <img src={ cartImage } alt="Cart" style={ { width: '60px' } } />
        </header>
        <nav className="nav-cart">
          <Link exact to="/">
            <img src={ backImage } alt="Cart" style={ { width: '50px' } } />
          </Link>
        </nav>
        <h2 className="empty-cart-message" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      </div>
    );
  }
}
