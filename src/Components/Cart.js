import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Cart.module.css';

class Cart extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return !cart ? (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    ) : (
      <section className={ style.cart }>
        {cart && cart.map((item, index) => (
          <div key={ index }>
            <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
            <img src={ item.thumbnail } alt="foto do produto no carro" />
            <p>
              R$
              { item.price }
            </p>
            <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
          </div>
        ))}
      </section>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Cart;
