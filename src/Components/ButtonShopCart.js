import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShopCart extends Component {
  render() {
    return (
      <Link to="/shoppingCart" data-testid="shopping-cart-button" type="button">
        Adicionar ao Carrinho
      </Link>
    );
  }
}

export default ButtonShopCart;
