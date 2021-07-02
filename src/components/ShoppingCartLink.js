import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCartImage from '../images/shoppingCart.jpg';

export default class ShoppingCartLink extends React.Component {
  render() {
    const { quantity } = this.props;
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <img src={ shoppingCartImage } alt="Cart" />
        <span data-testid="shopping-cart-size">
          { `Quantidade: ${quantity}` }
        </span>
      </Link>
    );
  }
}

ShoppingCartLink.propTypes = {
  quantity: PropTypes.number,
}.isRequired;
