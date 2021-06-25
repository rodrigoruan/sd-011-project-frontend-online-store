import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Cart.module.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: localStorage.cart ? JSON.parse(localStorage.getItem('cart')) : [],
    };
  }

  handleClickAdd(_item, index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.map((product, _cartIndex, cartArray) => {
      if (cartArray.indexOf(product) === index) {
        const { quantity } = product;
        const newQuantity = quantity + 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem('cart')),
    });
  }

  handleClickSub(_item, index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.map((product, _cartIndex, cartArray) => {
      if (cartArray.indexOf(product) === index) {
        const { quantity } = product;
        const newQuantity = quantity - 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem('cart')),
    });
  }

  handleClickRemove(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter((product) => product.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem('cart')),
    });
  }

  render() {
    const { shoppingCart } = this.state;
    return (shoppingCart.length === 0) ? (
      <>
        <ShoppingCart cart={ shoppingCart } />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </>
    ) : (
      <>
        <ShoppingCart cart={ shoppingCart } />
        <section className={ style.cart }>
          {shoppingCart && shoppingCart.map((item, index) => (
            <div key={ index }>
              <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
              <img src={ item.thumbnail } alt="foto do produto no carro" />
              <p>
                R$
                { item.price }
              </p>
              <button
                type="button"
                onClick={ () => this.handleClickRemove(item) }
                id={ item.id }
              >
                X
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.handleClickSub(item, index) }
                disabled={ item.quantity === 1 }
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.handleClickAdd(item, index) }
                disabled={ item.quantity === item.availableQuantity }
              >
                +
              </button>
            </div>
          ))}
          <h2>
            Total:R$
            {shoppingCart.reduce((acc, cv) => acc + (cv.price * cv.quantity),
              0).toFixed(2)}
          </h2>
          <Link to="/checkout">
            <button
              data-testid="checkout-products"
              type="button"
            >
              Finalizar compra
            </button>
          </Link>
        </section>
      </>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Cart;
