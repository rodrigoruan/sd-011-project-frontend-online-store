import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { subClick, addClick, quantity } = this.props;
    return (
      <div>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ subClick }
        >
          -
        </button>

        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
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
