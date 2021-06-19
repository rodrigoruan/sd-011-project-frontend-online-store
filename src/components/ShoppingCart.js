import React from 'react';
import CartItem from './CartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      productInfo: JSON.parse(localStorage.getItem('productInfos')),
    };
  }

  render() {
    const { productInfo } = this.state;
    if (window.localStorage.length === 0) {
      return (
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      );
    }
    return (
      <ul>
        { productInfo.map((product) => (
          <CartItem productInfo={ product } key={ product.id } />
        )) }
        <h2>Total:</h2>
        <span data-testid="shopping-cart-product-quantity">
          Quantidade de Produtos:
          { productInfo.length }
        </span>
      </ul>
    );
  }
}

export default ShoppingCart;
