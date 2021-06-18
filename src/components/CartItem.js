import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {

  // getProductFromLocalStorage() {
  //   const cart = localStorage.getItem('cart');
  //   if (!cart) return [];
  //   return JSON.parse(cart);
  // }

  // updateItemQuantity() {
  //   const oldProducts = this.getProductFromLocalStorage();

  // }

  render() {
    const itemQuantity = 1;
    const { product: { thumbnail, price, title } } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ `Imagem do ${title}` } width="100px" />
        <p>{ price }</p>
        <button
          type="button"
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { itemQuantity }
        </span>
        <button
          type="button"
        >
          +
        </button>
      </div>
    );
  }
}

export default CartItem;

CartItem.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    // id: PropTypes.string,
  }).isRequired,
};
