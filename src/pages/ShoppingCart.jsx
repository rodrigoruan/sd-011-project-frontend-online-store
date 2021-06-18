import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConteudoCarrinho from '../components/ConteudoCarrinho';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1>CARRINHO DE COMPRAS</h1>
        <ConteudoCarrinho />
        <Link
          data-testid="checkout-products"
          to="/FinalizarCompra"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
