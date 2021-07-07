import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import style from './ShoppingCartLink.module.css';

export default class ShoppingCartLink extends React.Component {
  render() {
    const { quantity } = this.props;
    return (
      <Link to="/cart" className={ style.container } data-testid="shopping-cart-button">
        <FontAwesomeIcon icon={ faShoppingCart } />
        <span data-testid="shopping-cart-size">
          { `(${quantity})` }
        </span>
      </Link>
    );
  }
}

ShoppingCartLink.propTypes = {
  quantity: PropTypes.number,
}.isRequired;
