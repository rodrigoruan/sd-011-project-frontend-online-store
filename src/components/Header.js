import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  counterProductsCart() {
    const currentCart = localStorage.getItem('shoppingCart');
    if (!currentCart) {
      return 0;
    }
    const parsedCurrentCart = JSON.parse(currentCart);
    const counter = Object.values(parsedCurrentCart)
      .reduce((acc, product) => (acc + product.quantity), 0);
    return counter;
  }

  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho
          {' '}
          <span data-testid="shopping-cart-size">{ this.counterProductsCart() }</span>
        </Link>
      </div>
    );
  }
}

export default Header;
