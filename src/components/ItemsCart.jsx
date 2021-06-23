import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemsCart extends Component {
  render() {
    const { removeFromCart, cartProduct, addToCart, decreaseFromCart } = this.props;
    const { title, thumbnail, price, index, amount } = cartProduct;

    return (
      <div key={ index } className="cart-item">
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt="Product Thumbnail" />
        <span>
          R$
          { price }
        </span>
        <span data-testid="shopping-cart-product-quantity">
          Quantidade:
          { amount }
        </span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => decreaseFromCart(cartProduct) }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => addToCart(cartProduct) }
        >
          +
        </button>
        <button
          type="button"
          onClick={ () => removeFromCart(cartProduct) }
        >
          Remover
        </button>
      </div>
    );
  }
}

ItemsCart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  decreaseFromCart: PropTypes.func.isRequired,
  cartProduct: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
