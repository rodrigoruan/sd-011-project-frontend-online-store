import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../images/cart.svg';
import back from '../images/arrow_back.svg';
import cartempty from '../images/cart_empty.svg'
import './ShopCart.css'

export default class EmptyShopCart extends Component {
  render() {
    return (
      <div className="body">
        <header className="cart-header">
          <Link exact to="/">
            <img src={ back } alt="Cart" style={ { width: '50px' } } className="back" />
          </Link>
          <h1> Carrinho de Compras </h1>
          <img src={ cartImage } alt="Cart" style={ { width: '60px' } } />
        </header>
        <div className="cartbody-empty">
          <img src={ cartempty } alt="Carrinho vazio" />
          <h2 className="empty-cart-message" data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        </div>
      </div>
    );
  }
}
