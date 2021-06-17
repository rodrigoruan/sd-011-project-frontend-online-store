import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { subClick, addClick } = this.props;
    return (
      <div>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ subClick }
        >
          -
        </button>

        <p data-testid="shopping-cart-product-quantity"> 1 </p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ addClick }
        >
          +
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  subClick: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired,
};
