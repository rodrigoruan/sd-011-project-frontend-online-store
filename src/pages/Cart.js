import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  getProductFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return JSON.parse(cart);
  }

  renderLocalStorageItems() {
    const oldCart = this.getProductFromLocalStorage();
    if (!oldCart) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return oldCart.map((product) => (
      <CartItem key={ product.id } product={ product } />
    ));
  }

  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        { this.renderLocalStorageItems() }
        <p>Soma Total</p>
        <Link to="/" className="cart-render-link">Voltar Para Pagina Inicial</Link>
        <Link
          to="/Checkout"
          data-testid="checkout-products"
          className="cart-render-link"
        >
          Finalizar compra
        </Link>
      </div>
    );
  }
}

export default Cart;
