import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {
          (cartItems.length === 0)
            ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            : cartItems.map((product, index) => (
              <p key={ index } data-testid="shopping-cart-product-name">
                { product.name }
              </p>
            ))
        }
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.isRequired,
};
