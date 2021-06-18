import React, { Component } from 'react';
import { ConteudoCarrinho } from '../components/index';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1>CARRINHO DE COMPRAS</h1>
        <ConteudoCarrinho />
      </div>
    );
  }
}

export default ShoppingCart;
