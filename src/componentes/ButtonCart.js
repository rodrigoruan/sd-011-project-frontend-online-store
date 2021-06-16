import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends Component {
  render() {
    return (
      <Link to="/cartpages" data-testid="shopping-cart-button">
        <img src="src/images/shopCartIcon.png" alt="botão carrinho de compras" />
      </Link>
    );
  }
}

export default ButtonCart;
