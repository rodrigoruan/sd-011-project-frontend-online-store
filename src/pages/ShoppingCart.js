import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backImg from '../imgs/Seta.png';
import cartImg from '../imgs/Carrinho.png';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.renderShopCart = this.renderShopCart.bind(this);
    this.getCartTotal = this.getCartTotal.bind(this);
  }

  getCartTotal(cart) {
    return cart.reduce((acc, curr) => {
      acc += curr.price * curr.amount;
      return acc;
    }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  renderShopCart(shopCart) {
    const {
      handleRemoveItemFromCart,
      handleIncreaseItemAmount,
      handleDecreaseItemAmount,
    } = this.props;

    return (
      <>
        {shopCart.map(({ id, thumbnail, title, price, amount }) => (
          <div className="shopping-cart-item-card" key={ id }>
            <button
              type="button"
              className="cart-item-button"
              onClick={ () => handleRemoveItemFromCart(id) }
            >
              x
            </button>
            <div className="cart-item-img-container">
              <img src={ thumbnail } alt="product" />
            </div>
            <p
              className="cart-item-title"
              data-testid="shopping-cart-product-name"
            >
              { title }
            </p>
            <button
              type="button"
              className="cart-item-button"
              onClick={ () => handleDecreaseItemAmount(id) }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <div
              className="cart-item-amount"
              data-testid="shopping-cart-product-quantity"
            >
              { amount }
            </div>
            <button
              type="button"
              className="cart-item-button"
              onClick={ () => handleIncreaseItemAmount(id) }
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <p>
              { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
            </p>
          </div>
        ))}
        <p>
          <strong>
            Valor Total do Carrinho:
          </strong>
          {this.getCartTotal(shopCart)}
        </p>

        <button type="button">Finalizar Compra</button>
      </>
    );
  }

  render() {
    const { shopCart } = this.props;

    return (
      <>
        <Link to="/">
          <img
            width="30px"
            src={ backImg }
            alt="imagem de voltar"
          />
        </Link>

        <div>
          <h1>
            <img width="30px" src={ cartImg } alt="carrinho de compras" />
            Carrinho de compras
          </h1>
        </div>

        {shopCart.length
          ? this.renderShopCart(shopCart)
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </>
    );
  }
}
export default ShoppingCart;

ShoppingCart.propTypes = {
  shopCart: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  })),
}.isRequired;
