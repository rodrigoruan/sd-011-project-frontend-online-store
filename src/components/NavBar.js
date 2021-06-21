import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link
        to="/Cart"
        data-testid="shopping-cart-button"
      >
        CART
      </Link>
    </div>
  );
}
