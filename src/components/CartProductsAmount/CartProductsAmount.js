import React, { Component } from 'react';
import './CartProductsAmount.css';

export default class CartProductsAmount extends Component {
  render() {
    const { shopCart } = this.props;
    return (
      <div>
        <span
          data-testid="shopping-cart-size"
        >
          {shopCart.length ? shopCart.map(({ amount }) => amount).reduce((totalAmount, amountOfProduct) => totalAmount + amountOfProduct) : 0}
        </span>
      </div>
    )
  }
}