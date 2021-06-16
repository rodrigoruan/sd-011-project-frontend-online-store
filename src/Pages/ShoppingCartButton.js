import React from 'react';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <button data-testid="shopping-cart-button" type="button">
        Adicionar ao Carrinho
      </button>
    );
  }
}

export default ShoppingCartButton;
