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
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={ 2 }
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
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
