import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItens: [
        {
          itemId: 1,
          name: 'bota',
          price: 15,
          qtd: 1,
        },
        {
          itemId: 2,
          name: 'Chinelo',
          price: 5,
          qtd: 0,
        },
        {
          itemId: 3,
          name: 'boné',
          price: 10,
          qtd: 2,
        },
      ],
    };
  }

  render() {
    const { cartItens } = this.state;
    if (cartItens.length === 0) {
      return (
        <div>
          <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Voltar</Link>
        {cartItens.map((item, index) => (
          <div key={ index }>
            <button type="button"> Remover </button>
            <img src="thumbnail" alt="img" />
            <p>{item.name}</p>
            <button type="button">+</button>
            {item.qtd}
            <button type="button">-</button>
            {item.qtd * item.price}
          </div>))}
        <p>Valor Total da Compra: {cartItens.reduce((acc, current) => acc += current.price * current.qtd, 0 )} </p>
      </div>
    );
  }
}
