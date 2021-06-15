import React, { Component } from 'react';
import emptyBoxImage from '../images/emptyBox.png';

class cartPage extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <span>
          <img src={ emptyBoxImage } alt="Cart" />
          Seu carrinho está vazio
        </span>
      </div>
    );
  }
}

export default cartPage;
