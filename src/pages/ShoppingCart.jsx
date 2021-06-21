import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartItem from '../components/ShoppingCartItem';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [],
      totalShoppingCart: 0,
    };
    this.deletProduct = this.deletProduct.bind(this);
    this.updatedProduct = this.updatedProduct.bind(this);
    this.totalShoppingCart = this.totalShoppingCart.bind(this);
    this.retrieveCartItems = this.retrieveCartItems.bind(this);
  }

  componentDidMount() {
    this.retrieveCartItems();
  }

  retrieveCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems === null) {
      cartItems = [];
    }
    this.setState((state) => ({
      shoppingCart: [...state.shoppingCart, ...cartItems],
    }), () => {
      this.totalShoppingCart();
    });
  }

  deletProduct(id) {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const removedItemCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify([...removedItemCart]));
    this.setState({
      shoppingCart: [...removedItemCart],
    }, () => this.totalShoppingCart());
  }

  updatedProduct({ ...productUpdated }) {
    const { shoppingCart } = this.state;
    const newShoppincart = shoppingCart.map((product) => {
      if (product.id === productUpdated.id) {
        return { ...product, ...productUpdated };
      }
      return product;
    });
    this.setState({
      shoppingCart: [...newShoppincart],
    });
    localStorage.setItem('cart', JSON.stringify([...newShoppincart]));
    this.totalShoppingCart();
  }

  totalShoppingCart() {
    this.setState({
      totalShoppingCart: 0,
    }, () => {
      const { shoppingCart } = this.state;
      const totalSumPrices = shoppingCart.reduce(
        (acc, total) => acc + (total.quantity * total.price), 0,
      );
      this.setState({
        totalShoppingCart: totalSumPrices,
      });
    });
  }

  render() {
    const { shoppingCart, totalShoppingCart } = this.state;
    return (
      <div className="shopping-cart-page">
        <div className="button-back">
          <Link to="/">Voltar</Link>
        </div>
        <div className="page-title">
          <h2>Carrinho de Compras</h2>
        </div>
        <div className="shopping-cart-products-list">
          { shoppingCart.length === 0
            ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            : shoppingCart.map((product) => (
              <ShoppingCartItem
                key={ product.id }
                item={ product }
                deletProduct={ this.deletProduct }
                updatedProduct={ this.updatedProduct }
              />)) }
        </div>
        <div className="total-shopping-cart-section">
          <p className="total-shopping-cart">
            R$
            { totalShoppingCart }
          </p>
        </div>
        <Link
          data-testid="checkout-products"
          to={ {
            pathname: '/Checkout',
            state: {
              cart: shoppingCart },
          } }
        >
          Ir para Checkout
        </Link>
      </div>
    );
  }
}
