import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleIncrease(index) {
    const increaseItemObject = JSON.parse(localStorage.getItem('item'));
    increaseItemObject[`${index}`].countProduct += 1;
    localStorage.setItem('item', JSON.stringify([...increaseItemObject]));
    // increaseItemObject = localStorage.setItem(`${index}`, countProduct += 1);
  }

  handleDecrease(index, id) {
    const increaseItemObject = JSON.parse(localStorage.getItem('item'));
    if (increaseItemObject[`${index}`].countProduct <= 1) {
      const filterId = increaseItemObject.filter((value) => value.id !== id);
      localStorage.setItem('item', JSON.stringify([...filterId]));
    } else {
      increaseItemObject[`${index}`].countProduct -= 1;
      localStorage.setItem('item', JSON.stringify([...increaseItemObject]));
    }
  }

  handleRemove() {
    localStorage.clear();
  }

  render() {
    const arrayObject = JSON.parse(localStorage.getItem('item'));
    return (
      <div>
        {!localStorage.item ? (
          <div data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </div>
        ) : (
          arrayObject.map(({ id, title, thumbnail, price, countProduct }, index) => (
            <div key={ index } data-testid="shopping-cart-product-name">
              <h2>{`${title}-${price}`}</h2>
              <img src={ thumbnail } alt={ title } />
              <div data-testid="shopping-cart-product-quantity">{countProduct}</div>
              <div>{`${countProduct * price}`}</div>
              <Link to="/ShoppingCart">
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.handleIncrease(index) }
                >
                  +
                </button>
              </Link>
              <Link to="/ShoppingCart">
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.handleDecrease(index, id) }
                >
                  -
                </button>
              </Link>
            </div>
          ))
        )}
        {localStorage.item
          && <div>{arrayObject.length}</div>}
        <button type="button" onClick={ this.handlTotalPrice }>Finalizar Compra</button>
        <Link to="/ShoppingCart">
          <button type="button" onClick={ this.handleRemove }>Remover</button>
        </Link>
        <Link data-testid="shopping-cart-button" to="/">
          Voltar
        </Link>
      </div>
    );
  }
}
