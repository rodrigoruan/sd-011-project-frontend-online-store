import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading
          ? <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio </div>
          : <div>teste</div> }
      </div>
    );
  }
}
