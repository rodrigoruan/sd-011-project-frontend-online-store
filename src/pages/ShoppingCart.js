import React, { Component } from 'react';
import { CartProduct } from '../components/zComponentsMenu';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount(){
    
  }

  render() {
    const emptyCartMessage = (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );
    const { cartItems } = this.props;
    if (!cartItems) {
      return emptyCartMessage;
    }
    return cartItems.map(item => <CartProduct productData={item} />);
  }
}
