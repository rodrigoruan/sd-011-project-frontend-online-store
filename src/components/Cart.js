import React, { Component } from 'react';
import { getCart } from '../services/storage';

export default class Cart extends Component {
  render() {
    const sdt = this.props;
    const cart = getCart();
    if (cart) {
      const reducer = (a, b) => a + b.quantity;
      const cartList = cart.reduce(reducer, 0);
      return <div data-testid="shopping-cart-size">{cartList}</div>;
    }
    return <span data-testid="shopping-cart-size">0</span>;
  }
}
