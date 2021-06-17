import React, { Component } from 'react';
import { results } from '../__mocks__/query';
import closeButton from '../images/close-button.png';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    localStorage.setItem('items', JSON.stringify(results));
    const items = JSON.parse(localStorage.getItem('items'));
    this.state = {
      items,
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        { items.map(({ title, thumbnail, price, id }, index) => (
          <div key={ index }>
            <img src={ closeButton } alt="close button" />
            <img src={ thumbnail } alt="Foto do Produto" />
            <p>{title}</p>
            <button
              id={ id }
              type="button"
              data-testid="product-decrease-quantity"
              // onClick={ decreaseQuantity }
            >
              -
            </button>
            <p>
              Quantidade:
              {
                items.reduce((acc, item) => (item.id === id ? acc + 1 : acc), 0)
              }
            </p>
            <button
              id={ id }
              type="button"
              data-testid="product-increase-quantity"
              // onClick={ increaseQuantity }
            >
              +
            </button>
            <p>{`Preço: R$${price}`}</p>
            <p>{ `Valor total: R$${price}` }</p>
          </div>
        )) }
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}
