import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  render() {
    const arrayObject = JSON.parse(localStorage.getItem('item'));
    return (
      <div>
        {!localStorage.item ? (
          <div data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </div>
        ) : (
          arrayObject.map(({ title, thumbnail, price, countProduct }, index) => (
            <div key={ index } data-testid="shopping-cart-product-name">
              <h2>{`${title}-${price}`}</h2>
              <img src={ thumbnail } alt={ title } />
              <div data-testid="shopping-cart-product-quantity">{countProduct}</div>
            </div>
          ))
        )}
        {localStorage.item
          && <div>{arrayObject.length}</div>}
        <Link data-testid="shopping-cart-button" to="/">
          Voltar
        </Link>
      </div>
    );
  }
}
