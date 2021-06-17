import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      // cartProducts: [],
    };
  }

  render() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

export default Cart;
