import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <button type="button" data-testid="shopping-cart-button">Comprar</button>
      </div>
    );
  }
}

export default ShoppingCart;
