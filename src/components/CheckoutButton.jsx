import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CheckoutButton extends Component {
  render() {
    return (
      <Link
        to="/checkout"
        data-testid="checkout-products"
      >
        <button type="button">
          Comprar agora
        </button>
      </Link>
    );
  }
}
