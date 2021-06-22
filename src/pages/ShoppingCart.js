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
    const { getCart,
      removeCartItem,
      increaseQuantityItem,
      decreaseQuantityItem,
    } = this.props;
    const items = getCart();

    if (items.length === 0) {
      return this.renderEmptycart();
    }
    if (items.length > 0) {
      return (
        <div>
          <h2>Carrinho de Compras</h2>
          {items.map(({ id, title, price, thumbnail, qtde }) => (
            <div className="rowCart" key={ id }>
              <button
                className="buttonTransparent"
                type="button"
                onClick={ () => removeCartItem(id) }
              >
                X
              </button>
              <img src={ thumbnail } alt={ title } />
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <button
                data-testid="product-decrease-quantity"
                className="buttonTransparent"
                type="button"
                onClick={ () => decreaseQuantityItem(id) }
              >
                -
              </button>
              <h3 data-testid="shopping-cart-product-quantity">
                Quantidade:
                { qtde }
              </h3>
              <button
                data-testid="product-increase-quantity"
                className="buttonTransparent"
                type="button"
                onClick={ () => increaseQuantityItem(id) }
              >
                +
              </button>
              <h3>
                <span>R$</span>
                { price }
              </h3>
            </div>
          ))}
        </div>
      );
    }
  }
}

ShoppingCart.propTypes = {
  getCart: PropTypes.func,
  removeCartItem: PropTypes.func,
  increaseQuantityItem: PropTypes.func,
  decreaseQuantityItem: PropTypes.func,
}.isRequired;
