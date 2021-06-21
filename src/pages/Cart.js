import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
    };

    this.updateTotalPrice = this.updateTotalPrice.bind(this);
  }

  componentDidMount() {
    this.updateTotalPrice();
  }

  getProductFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return JSON.parse(cart);
  }

  saveToLocalStorage(totalPrice) {
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }

  updateTotalPrice() {
    const localCart = this.getProductFromLocalStorage();
    let productPrices = 0;
    if (!localCart) {
      return productPrices;
    }
    productPrices = localCart.map((product) => Math
      .round((product.quantity * product.price) * 100) / 100);

    const totalPrice = productPrices.reduce((acc, current) => acc + current);
    this.setState({
      totalPrice,
    });

    this.saveToLocalStorage(totalPrice);
    return totalPrice;
  }

  renderLocalStorageItems() {
    const oldCart = this.getProductFromLocalStorage();
    if (!oldCart) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return oldCart.map((product) => (
      <CartItem
        key={ product.id }
        product={ product }
        updateTotalPrice={ this.updateTotalPrice }
      />
    ));
  }

  render() {
    const { totalPrice } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        { this.renderLocalStorageItems() }
        <p>
          Soma Total: R$
          { totalPrice.toFixed(2) }
        </p>
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
