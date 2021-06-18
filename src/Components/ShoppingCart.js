import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  // constructor() {
  //   super();

  // }

  subtractItem = (id) => {
    const getItemById = localStorage.getItem(id);
    let number = parseInt(getItemById.split(',/n')[3].replace(',', ''), 10);
    const title = getItemById.split(',/n')[0];
    const thumbnail = getItemById.split(',/n')[1].replace(',', '');
    const price = getItemById.split(',/n')[2];

    if (number >= 1) {
      number -= 1;
    } else {
      number = 0;
    }

    localStorage
      .setItem(id, [title, '/n', thumbnail, '/n', price, '/n', number, '/n', id]);
    const quantityElement = document.getElementById('quantity');
    quantityElement.innerHTML = number;
  }

  addItem = (id) => {
    const getItemById = localStorage.getItem(id);
    let number = parseInt(getItemById.split(',/n')[3].replace(',', ''), 10);
    const title = getItemById.split(',/n')[0];
    const thumbnail = getItemById.split(',/n')[1].replace(',', '');
    const price = getItemById.split(',/n')[2];

    console.log(number);
    number += 1;
    console.log(number);

    localStorage
      .setItem(id, [title, '/n', thumbnail, '/n', price, '/n', number, '/n', id]);
    const quantityElement = document.getElementById('quantity');
    quantityElement.innerHTML = number;
  }

  render() {
    const cartItems = { ...localStorage };

    const renderCartObjects = Object.values(cartItems).map((element) => (
      <div key={ element.split(',/n')[0] }>
        <h3 data-testid="shopping-cart-product-name">{ element.split(',/n')[0] }</h3>
        <img src={ element.split(',/n')[1].replace(',', '') } alt={ element } />
        <div>
          <button
            type="button"
          >
            X
          </button>
          <p id="quantity" data-testid="shopping-cart-product-quantity">
            { element.split(',/n')[3].replace(',', '') }
          </p>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => this.subtractItem(element.split(',/n')[4].replace(',', '')) }
          >
            -
          </button>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => this.addItem(element.split(',/n')[4].replace(',', '')) }
          >
            +
          </button>
        </div>
      </div>
    ));
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        <div>{ renderCartObjects }</div>
        {/* adiciona requisito 12 abaixo ---- */}
        <Link to={ { pathname: '/checkout' } }>
          <button
            data-testid="checkout-products"
            type="button"
          >
            Comprar
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
