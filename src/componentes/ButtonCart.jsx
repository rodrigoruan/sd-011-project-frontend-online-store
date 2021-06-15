import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends Component {
  render() {
    return (
      <Link to="/carPages" data-testid="shopping-cart-button">
        <button type="button">cart</button>
      </Link>
    );
  }
}

export default ButtonCart;
