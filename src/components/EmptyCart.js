import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import style from './EmptyCart.module.css';

class EmptyCart extends Component {
  render() {
    return (
      <section className={ style.emptyCart }>
        <FontAwesomeIcon icon={ faBoxOpen } size="4x" />
        <h1>Seu carrinho está vazio</h1>
      </section>
    );
  }
}

export default EmptyCart;
