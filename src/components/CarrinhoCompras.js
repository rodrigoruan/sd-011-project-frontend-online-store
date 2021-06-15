import React, { Component } from 'react';

class CarrinhoCompras extends Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default CarrinhoCompras;
