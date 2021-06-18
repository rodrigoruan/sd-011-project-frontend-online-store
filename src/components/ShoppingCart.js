import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        {
          (JSON.parse(localStorage.ShoppingCart).length === 0)
            ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            : JSON.parse(localStorage.ShoppingCart).map((product, index) => (
              <div key={ index }>
                <p data-testid="shopping-cart-product-name">{ product.title }</p>
                <p data-testid="shopping-cart-product-quantity">{product.counter}</p>
              </div>
            ))
        }
        <Link to="/">Voltar</Link>
        <Link to="/CheckoutPage">
          <button type="button" data-testid="checkout-products">Finalizar compra</button>
        </Link>
      </div>
    );
  }
}
