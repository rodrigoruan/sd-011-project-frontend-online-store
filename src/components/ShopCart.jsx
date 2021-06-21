import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EmptyShopCart from './EmptyShopCart';
import cartImage from '../images/cart.svg';
import backImage from '../images/back.png';

export default class ShopCart extends Component {
  render() {
    const { product: { title, price, thumbnail, id }, addCart } = this.props;
    const { product } = this.props;
    cconst {
      cartItems,
      removeCartItem,
      increaseItemQuantity,
      decreaseItemQuantity,
    } = this.props;
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
            <p>{`R$ ${item.price}`}</p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              // onClick={ () => console.log('ok') }
            >
              +
            </button>

            <span>
              `Quantidade:`
            </span>

            <button
              data-testid="product-decrease-quantity"
              type="button"
              // onClick={ () => console.log('ok') }
            >
              -
            </button>
          </div>))}
      </div>
    );
  }
}

ShopCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      map: PropTypes.func,
    }),
  }).isRequired,
  removeCartItem: PropTypes.func.isRequired,
};
