import React, { Component } from 'react';
import ProductCart from './ProductCart';

class CartPages extends Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <ProductCart />
      </div>
    );
  }
}

export default CartPages;
