import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EmptyShopCart from './EmptyShopCart';
import cartImage from '../images/cart.svg';
import backImage from '../images/back.png';

export default class ShopCart extends Component {
  render() {
    const { cartItems, removeCartItem, increaseItemQuantity, decreaseItemQuantity } = this.props;
    if (cartItems.length === 0) return <EmptyShopCart />;

    return (
      <div>
        <header className="cart-header">
          <h1> Carrinho de Compras </h1>
          <img src={ cartImage } alt="Cart" style={ { width: '60px' } } />
        </header>
        <nav className="nav-cart">
          <Link exact to="/">
            <img src={ backImage } alt="Cart" style={ { width: '50px' } } />
          </Link>
        </nav>
        <p data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${cartItems.length}`}
        </p>
        { cartItems.map((item) => (
          <div className="cart-product-container" key={ item.id }>
            <button
              onClick={ removeCartItem }
              type="button"
              value={ item.id }
            >
              X
            </button>
            <img className="image-product-cart" src={ item.thumbnail } alt={ item.id } />
            <p
              className="cart-product-title"
              data-testid="shopping-cart-product-name"
            >
              { item.title }
            </p>
            <button
              onClick={ decreaseItemQuantity }
              type="button"
              value={ item.id }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <button
              onClick={ increaseItemQuantity }
              type="button"
              value={ item.id }
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <p>{`R$ ${item.price}`}</p>
          </div>))}
      </div>
    );
  }
}

ShopCart.propTypes = {

};
