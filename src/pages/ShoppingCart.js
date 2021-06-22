import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { getCart } = this.props;
    const items = getCart();
    return (
      <div>
        {
          items.length === 0
            ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
            : (
              items.map(({ title, price, thumbnail }) => (
                <div key={ title }>
                  <p data-testid="shopping-cart-product-name">{ title }</p>
                  <img src={ thumbnail } alt="" />
                  <p>{ price }</p>
                  <p data-testid="shopping-cart-product-quantity">
                    Quantidade:
                    { getCart().length }
                  </p>
                </div>
              ))
            )
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  getCart: PropTypes.func,
}.isRequired;
