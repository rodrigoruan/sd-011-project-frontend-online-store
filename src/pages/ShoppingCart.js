import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: '',
    };
  }

  componentDidMount(){
    
  }

  render() {
    const emptyCartMessage = (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );
    const { cartItems } = this.state;
    if (!cartItems) {
      return emptyCartMessage;
    }
    return cartItems;
  }
}
