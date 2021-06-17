import React, { Component } from 'react';
import closeButton from '../images/close-button.png';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);

    const items = JSON.parse(localStorage.getItem('items'));
    this.state = {
      items,
    };
  }

  increaseQuantity(event) {
    const { items } = this.state;
    const { target: { id } } = event;

    items.forEach((product, index) => {
      if (product.id === id) {
        items[index].quantity += 1;
      }
    });
    this.setState({
      items,
    });
  }

  decreaseQuantity(event) {
    const { items } = this.state;
    const { target: { id } } = event;

    items.forEach((product, index) => {
      if (product.id === id && product.quantity >= 1) {
        items[index].quantity -= 1;
      }
    });
    this.setState({
      items,
    });
  }

  removeAllItems(event) {
    const { items } = this.state;
    const { target: { id } } = event;
    this.setState({
      items: items.filter((product) => product.id !== id),
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        { items.map(({ title, thumbnail, price, id, quantity }, index) => (
          <div key={ index }>
            <img
              src={ closeButton }
              alt="close button"
              id={ id }
              onClick={ this.removeAllItems }
            />
            <img src={ thumbnail } alt="Foto do Produto" />
            <p>{title}</p>
            <button
              id={ id }
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ this.decreaseQuantity }
            >
              -
            </button>
            <p>
              Quantidade:
              { quantity }
            </p>
            <button
              id={ id }
              type="button"
              data-testid="product-increase-quantity"
              onClick={ this.increaseQuantity }
            >
              +
            </button>
            <p>{`Preço: R$${price}`}</p>
            <p>{ `Valor total: R$${price}` }</p>
          </div>
        )) }
        {items.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : <p />}
      </div>
    );
  }
}
