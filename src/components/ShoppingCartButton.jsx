/* eslint-disable max-len */

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
        <button type="button" className="relative">
          <svg className="w-7 h-7 hover:text-yellow-400 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
          <span
            data-testid="shopping-cart-size"
            className="absolute -bottom-2 -left-3 bg-gray-600 rounded-full h-6 w-6"
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
