import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: props.product.quantity,
    };

    this.getProductFromLocalStorage = this.getProductFromLocalStorage.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.removeQuantity = this.removeQuantity.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
  }

  getProductFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return JSON.parse(cart);
  }

  saveToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addQuantity(id) {
    let newCart = [];
    const { updateTotalPrice } = this.props;
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
    }
    this.setState({
      quantity: existingProductInCart.quantity,
    });
    this.saveToLocalStorage(newCart);
    updateTotalPrice();
  }

  removeQuantity(id) {
    let newCart = [];
    const { updateTotalPrice } = this.props;
    const oldCart = this.getProductFromLocalStorage();
    const existingProductInCart = oldCart.find((item) => item.id === id);
    if (existingProductInCart) {
      newCart = oldCart.map((item) => {
        if (item.id === id) {
          if (item.quantity >= 1) {
            item.quantity -= 1;
            return item;
          }
          return item;
        }
        return item;
      });
    }
    this.setState({
      quantity: existingProductInCart.quantity,
    });
    this.saveToLocalStorage(newCart);
    updateTotalPrice();
  }

  render() {
    const { quantity } = this.state;
    const { product: { thumbnail, price, title, id } } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ `Imagem do ${title}` } width="100px" />
        <p>{ price }</p>
        <button
          type="button"
          onClick={ () => this.removeQuantity(id) }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
        <button
          type="button"
          onClick={ () => this.addQuantity(id) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}

export default CartItem;

CartItem.propTypes = {
  updateTotalPrice: PropTypes.func.isRequired,
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
