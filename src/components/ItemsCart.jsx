import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class ItemsCart extends Component {
  render() {
    const { cart, removeFromCart, cartProduct, addToCart, decreaseFromCart } = this.props;
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
          <button data-testid="product-decrease-quantity" type="button" onClick={ () => decreaseFromCart(cartProduct) }>-</button>
          <button data-testid="product-increase-quantity" type="button" onClick={ () => addToCart(cartProduct) }>+</button>
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
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
