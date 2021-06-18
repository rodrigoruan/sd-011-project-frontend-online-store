import React, { Component } from 'react';
import emptyBoxImage from '../images/emptyBox.png';

class EmptyCart extends Component {
  render() {
    return (
      <span>
        <img src={ emptyBoxImage } alt="Cart" />
        Seu carrinho está vazio
      </span>
    );
  }
}

export default EmptyCart;
