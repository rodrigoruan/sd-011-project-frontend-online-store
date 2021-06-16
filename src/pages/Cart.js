import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  render() {
    const { location: { state: { cart } } } = this.props;

    if (!cart.length) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }

    if (cart) {
      return (
        <div>
          <p data-testid="shopping-cart-product-quantity">
            Quantos itens:
            { cart.length }
          </p>
          {cart.map(({ title }, index) => (
            <div key={ index }>
              <h3 data-testid="shopping-cart-product-name">
                {title}
              </h3>
            </div>))}
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
