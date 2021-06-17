import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    const produtoDoCarrinho = JSON.parse(localStorage.getItem('cart'));
    const mensagem = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>);
    return (
      <div>
        {!localStorage.cart ? (mensagem) : produtoDoCarrinho
          .map(({ title, thumbnail, price }, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
              <span data-testid="shopping-cart-product-quantity">1</span>
            </div>
          ))}
        <Link to="/">Main</Link>
      </div>
    );
  }
}

export default Cart;
