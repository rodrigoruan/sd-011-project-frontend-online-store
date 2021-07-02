import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export default class ShoppingCartButton extends Component {
  render() {
    const { totalItemCount } = this.props;

    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <button type="button">
          <img src="/img/shopping-cart.svg" alt="View shopping cart" />
          <span
            data-testid="shopping-cart-size"
          >
            { totalItemCount }
          </span>
        </button>
      </Link>

    );
  }
}

ShoppingCartButton.propTypes = {
  totalItemCount: PropTypes.number,
}.isRequired;
