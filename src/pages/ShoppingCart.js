import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  renderEmptycart() {
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }

  render() {
    const { getCart, removeCartItem } = this.props;
    const items = getCart();

    if (items.length === 0) {
      return this.renderEmptycart();
    }
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        {items.map(({ id, title, price, thumbnail }) => (
          <div className="rowCart" key={ title }>
            <button
              className="buttonTransparent"
              type="button"
              onClick={ () => removeCartItem(id) }
            >
              X
            </button>
            <h3 data-testid="shopping-cart-product-name">{ title }</h3>
            <img src={ thumbnail } alt="" />
            <p>{ price }</p>
            <p data-testid="shopping-cart-product-quantity">
              Quantidade:
              { getCart().length }
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  getCart: PropTypes.func,
  removeCartItem: PropTypes.func,
}.isRequired;
