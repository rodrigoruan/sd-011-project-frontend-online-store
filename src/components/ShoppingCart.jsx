import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>
    );
  }
}

export default ShoppingCart;
