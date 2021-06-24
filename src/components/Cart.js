import React, { Component } from 'react';
import { getCart } from '../services/storage';

export default class Cart extends Component {
  render() {
    const getCartQuantity = () => {
      const cart = getCart();
      if (cart) {
        const reducer = (a, b) => a + b.quantity;
        return cart.reduce(reducer, 0);
      }
      return 0;
    };
    // prettier-ignore
    return (<div data-testid="shopping-cart-size">{getCartQuantity()}</div>);
  }
}
