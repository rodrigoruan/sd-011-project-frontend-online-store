import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    const cartItems = {};
    Object.values(localStorage).forEach((value) => {
      if (typeof value !== 'number') {
        const item = JSON.parse(value);
        cartItems[item.title] = item;
      }
    });

    return (
      <div>
        <Link to="/">Voltar</Link>
        {
          localStorage.length === 0
            ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
            : (
              Object.entries(cartItems).map(([title, { price, thumbnail }]) => (
                <div key={ title }>
                  <p data-testid="shopping-cart-product-name">{ title }</p>
                  <img src={ thumbnail } alt={ title } />
                  <p>{ price }</p>
                  <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
                </div>
              ))
            )
        }
      </div>
    );
  }
}
