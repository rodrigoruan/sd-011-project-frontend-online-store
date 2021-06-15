import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        <div data-testid="shopping-cart-empty-message">
          <p>Seu carrinho está vazio</p>
        </div>
      </div>
    );
  }
}
export default Cart;
