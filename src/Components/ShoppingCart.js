import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
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
