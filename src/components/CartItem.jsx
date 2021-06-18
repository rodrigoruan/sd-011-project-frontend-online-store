import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    const decrease = -1;
    const increase = 1;
    this.deltas = [decrease, increase];
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    const { removeItemFromCart, product } = this.props;
    const { id } = product;
    removeItemFromCart(id);
  }

  render() {
    const { product, updateQuantity } = this.props;
    const { thumbnail, title, price, quantity } = product;
    return (
      <li className="cart-item-container">
        <button type="button" onClick={ this.removeItem }>X</button>
        <picture>
          <img src={ thumbnail } alt={ title } />
        </picture>
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <div className="quantity-switch">
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => updateQuantity(product, this.deltas[1]) }
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => updateQuantity(product, this.deltas[0]) }
          >
            -
          </button>
        </div>
        <h2>{`R$ ${(price * quantity).toFixed(2)}`}</h2>
      </li>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    quantity: PropTypes.number,
  }),
  addItemToCart: PropTypes.func,
}.isRequired;
