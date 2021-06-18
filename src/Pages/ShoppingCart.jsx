import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    const shoppingCartItens = JSON.parse(localStorage.getItem('shoppingCart'));

    this.state = {
      shoppingCartItens,
    };
  }

  render() {
    const { shoppingCartItens } = this.state;

    if (!shoppingCartItens) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        {shoppingCartItens.map((item) => (
          <div key={ item.productId }>
            <h1
              data-testid="shopping-cart-product-name"
            >
              { item.productInfo[0].title }
            </h1>
            <p data-testid="shopping-cart-product-quantity">{ item.quantity }</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
