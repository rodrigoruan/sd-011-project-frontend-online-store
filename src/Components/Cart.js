import React, { Component } from 'react';
import style from './Cart.module.css';

class Cart extends Component {
  render() {
    return (
      <div className={ style.cart }>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Cart;
