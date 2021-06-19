import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsAddToCartButton extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  getProductFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    if (!cart) return [];
    return JSON.parse(cart);
  }

  saveToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart() {
    const { product } = this.props;
    const { thumbnail, price, title, id } = product;
    let newCart = [];
    const oldCart = this.getProductFromLocalStorage();
    const existingProductInCart = oldCart.find((item) => item.id === id);
    if (existingProductInCart) {
      newCart = oldCart.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
    } else {
      const cartItem = {
        thumbnail,
        price,
        title,
        id,
        quantity: 1,
      };
      newCart = [...oldCart, cartItem];
    }
    this.saveToLocalStorage(newCart);
  }

  render() {
    return (
      <button
        type="button"
        onClick={ this.addToCart }
        data-testid="product-detail-add-to-cart"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default DetailsAddToCartButton;

DetailsAddToCartButton.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
