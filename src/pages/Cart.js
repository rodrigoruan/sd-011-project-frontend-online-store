import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  getProductFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    if (!cart) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return JSON.parse(cart).map((product) => (
      <CartItem key={ product.id } product={ product } />
    ));
  }

  render() {
    return (
      <div>
        { this.getProductFromLocalStorage() }
        <p>Soma Total</p>
        <Link to="/">Voltar Para Pagina Inicial</Link>
      </div>
    );
  }
}

export default Cart;
