import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Picture from '../img/shopping-cart.png';
import style from './ShoppingCart.module.css';

class ShoppingCart extends Component {
  render() {
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <img className={ style.cart } src={ Picture } alt="Carrinho de compras" />
      </Link>
    );
  }
}

export default ShoppingCart;
