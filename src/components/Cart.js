import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Main</Link>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Cart;
