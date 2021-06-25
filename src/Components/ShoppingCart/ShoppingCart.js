import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartIcon from '../../img/shopping-cart.png';
import style from './ShoppingCart.module.css';

class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <img className={ style.cart } src={ CartIcon } alt="Carrinho de compras" />
        </Link>
        <span data-testid="shopping-cart-size">
          {cart && cart.length > 0
            ? cart.reduce((acc, cv) => acc + cv.quantity, 0) : 0}
        </span>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
