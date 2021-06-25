import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../img/shopping-cart.png';
import style from './ShoppingCart.module.css';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      shoppingCart: localStorage.cart ? JSON.parse(localStorage.getItem('cart')) : [],
    };

    this.getCart = this.getCart.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.getCart();
    }
  }

  getCart() {
    this.setState({ shoppingCart: JSON.parse(localStorage.getItem('cart')) });
  }

  render() {
    const { shoppingCart } = this.state;

    return (
      <>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <img className={ style.cart } src={ Picture } alt="Carrinho de compras" />
        </Link>
        <span data-testid="shopping-cart-size">
          {shoppingCart.length > 0
            ? shoppingCart.reduce((total, cv) => total + cv.quantity, 0) : 0}
        </span>
      </>
    );
  }
}

export default ShoppingCart;
