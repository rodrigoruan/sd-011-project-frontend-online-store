import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../imgs/Seta.png';

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <Link to="/">
          <img
            width="30px"
            src={ image }
            alt="imagem de voltar"
          />
        </Link>
        <p>Seu carrinho está vazio</p>
      </>
    );
  }
}
export default ShoppingCart;
