import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

export default class Cart extends Component {
  render() {
    // const { location: { state: { cart } } } = this.props;
    const cart = JSON.parse(localStorage.getItem('addingCart'));

    if (!cart) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }

    if (cart) {
      return (
        <div>
          <p>
            Quantos itens:
            { cart.length }
          </p>
          {cart
            .map((result, index) => (
              <div key={ index }>
                <CartItem cart={ result } />
              </div>
            ))}
        </div>
      );
    }
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};
