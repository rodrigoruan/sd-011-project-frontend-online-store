import React from 'react';
import { Link } from 'react-router-dom';

export default class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">🛒</Link>
      </div>
    );
  }
}
