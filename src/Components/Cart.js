import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Cart.module.css';
import ShoppingCart from './ShoppingCart';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: localStorage.cart ? JSON.parse(localStorage.getItem('cart')) : [],
    };

    // this.getLocal = this.getLocal.bind(this);
    this.checkQuantity = this.checkQuantity.bind(this);
  }

  handleClickAdd(item, index, { target }) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity += 1;
    const productCurrentQuantity = cart[index].quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem('cart')),
    });
    this.checkQuantity(item, target, productCurrentQuantity);
    console.log('esse é o item: ', item);
    console.log('esse é o target: ', productCurrentQuantity);
    // console.log('', );
  }

  handleClickSub(item, index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[index].quantity > 1) cart[index].quantity -= 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem('cart')),
    });
    // this.checkQuantity(item, target);
  }

  handleClickRemove(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter((product) => product.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem('cart')),
    });
  }

  // getLocal() {
  //   return JSON.parse(localStorage.getItem('cart'));
  // }

  checkQuantity(cartItem, target, cv) {
    const { availableQuantity, quantity } = cartItem;
    console.log('cartItem: ', cartItem);
    console.log('quantity -1: ', quantity);
    console.log('available -1: ', availableQuantity);

    if (availableQuantity - parseInt(cv, 10) === 0) {
      console.log('quantity 1: ', quantity);
      console.log('available 1: ', availableQuantity);
      console.log('entrou no if quantity');
      const plusBtn = target;
      plusBtn.setAttribute('disabled', 'disabled');
    }
  }

  render() {
    const { shoppingCart } = this.state;
    return (shoppingCart.length === 0) ? (
      <>
        <ShoppingCart />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </>
    ) : (
      <>
        <ShoppingCart />
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
                onClick={ (event) => this.handleClickSub(item, index, event) }
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ (event) => this.handleClickAdd(item, index, event) }
                // id={ `btn ${index}` }
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
