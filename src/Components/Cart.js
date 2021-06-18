import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Cart.module.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: localStorage.cart ? JSON.parse(localStorage.getItem('cart')) : [],
    };
  }

  handleClickAdd(item, index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem('cart')),
    });
  }

  handleClickSub(item, index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[index].quantity > 1) cart[index].quantity -= 1;
    localStorage.setItem('cart', JSON.stringify(cart));
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
    // const cart = JSON.parse(localStorage.getItem('cart'));
    const { shoppingCart } = this.state;
    return (shoppingCart.length === 0) ? (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    ) : (
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
            >
              -
            </button>
            <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.handleClickAdd(item, index) }
            >
              +
            </button>
          </div>
        ))}
        <h2>
          Total:R$
          {shoppingCart.reduce((acc, cv) => acc + (cv.price * cv.quantity), 0).toFixed(2)}
        </h2>
      </section>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Cart;
