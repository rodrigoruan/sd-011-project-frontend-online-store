import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageCart from '../images/shopCartIcon.png';

class ButtonCart extends Component {
  render() {
    return (
      <Link to="/cartpages" data-testid="shopping-cart-button">
        <img
          src={ ImageCart }
          width="40px"
          alt="botão carrinho de compras"
        />
      </Link>
    );
  }
}

export default ButtonCart;
