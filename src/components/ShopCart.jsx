import React, { Component } from 'react';

export default class ShopCart extends Component {
  render() {
    const { productId } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}
