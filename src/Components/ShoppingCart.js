import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  // constructor() {
  //   super();

  // }

  subtractItem = (id) => {
    const getItemById = localStorage.getItem(id);
    let number = parseInt(getItemById.split(',/n')[3].replace(',', ''), 10);

    if (number >= 1) {
      number -= 1;
    } else {
      number = 0;
    }
    // localStorage.setItem();
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
          <p data-testid="shopping-cart-product-quantity">
            { element.split(',/n')[3].replace(',', '') }
          </p>
          <button
            type="button"
            onClick={ this.subtractItem(element.split(',/n')[4].replace(',', '')) }
          >
            -
          </button>
          <button
            type="button"
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
