import React, { Component } from 'react';

class CartQuantity extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('addingCart'));
    return (
      <div>
        <p
          data-testid="shopping-cart-size"
        >
          { cart ? cart.length : 0 }
        </p>
      </div>
    );
  }
}

export default CartQuantity;
