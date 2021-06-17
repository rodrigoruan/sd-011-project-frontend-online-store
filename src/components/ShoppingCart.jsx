import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const { cart, quantity } = this.props;
    const emptyCart = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    return !cart.length ? emptyCart : cart.map((product) => {
      return (
        <div key={ product.title }>
          <p data-testid="shopping-cart-product-name">{product.title}</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{product.price}</p>
          <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        </div>
      );
    });
  }
}

export default ShoppingCart;
