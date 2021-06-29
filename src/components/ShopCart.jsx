import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EmptyShopCart from './EmptyShopCart';
import cartImage from '../images/cart.svg';
import back from '../images/arrow_back.svg';
import './ShopCart.css';

export default class ShopCart extends Component {
  render() {
    const {
      cartItems,
      removeCartItem,
      increaseItemQuantity,
      decreaseItemQuantity,
    } = this.props;
    if (cartItems.length === 0) return <EmptyShopCart />;

    return (
      <div className="body">
        <header className="cart-header">
          <Link exact to="/">
            <img src={ back } alt="Cart" className="back" />
          </Link>
          <h1> Carrinho de Compras </h1>
          <img src={ cartImage } alt="Cart" className="cart" />
        </header>
        <div className="carbody">

          { cartItems.map((item) => (
            <div className="cart-product-container" key={ item.id }>
              <button
                className="button-clear"
                onClick={ removeCartItem }
                type="button"
                value={ item.id }
              >
                X
              </button>
              <div className="img-title">
                <img className="image-product-cart" src={ item.thumbnail } alt={ item.id } />
                <p
                  className="cart-product-title"
                  data-testid="shopping-cart-product-name"
                >
                  { item.title }
                </p>
              </div>
              <div className="quantity-item">
                <button
                  className="button-decrease"
                  onClick={ decreaseItemQuantity }
                  type="button"
                  value={ item.id }
                  data-testid="product-decrease-quantity"
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">{ item.quantity }</p>
                <button
                  className="button-increase"
                  onClick={ item.quantity < item.available_quantity && increaseItemQuantity }
                  type="button"
                  value={ item.id }
                  data-testid="product-increase-quantity"
                >
                  +
                </button>
                <p className="avaliable-quantity">{`Disponível: ${item.available_quantity}`}</p>
              </div>
              <p className="item-price">{`R$ ${item.price} un.`}</p>
            </div>))}
        </div>
        <div className="gocheckout">
          <div className="total-price">
            {`Valor Total da Compra: R$${cartItems.reduce((acc, curr) => (
              acc + (curr.quantity * curr.price)), 0).toFixed(2)}`}
          </div>
          <Link
            to="/checkout"
          >
            <button
              className="go-to-checkout-button"
              type="button"
              data-testid="checkout-products"
              value={ cartItems }
            >
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

ShopCart.propTypes = {
  cartItems: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    length: PropTypes.number,
    map: PropTypes.func,
    quantity: PropTypes.number,
    reduce: PropTypes.func,
  }).isRequired,
  removeCartItem: PropTypes.func.isRequired,
  increaseItemQuantity: PropTypes.func.isRequired,
  decreaseItemQuantity: PropTypes.func.isRequired,
};
