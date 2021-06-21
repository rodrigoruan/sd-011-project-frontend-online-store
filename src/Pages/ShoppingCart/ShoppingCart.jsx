import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './shoppingCart.css';

class ShoppingCart extends Component {
  constructor() {
    super();

    const shoppingCartItens = JSON.parse(localStorage.getItem('shoppingCart'));

    if (!shoppingCartItens) {
      this.state = {
        shoppingCartItens: [],
      };
    } else {
      this.state = {
        shoppingCartItens,
      };
    }

    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
  }

  handleClickIncrease(item) {
    const { shoppingCartItens } = this.state;
    const { quantity } = item;
    const availableQuantity = item.productInfo[0].available_quantity;

    if (availableQuantity > quantity) {
      shoppingCartItens
        .find((productItem) => productItem.productId === item.productId).quantity += 1;

      this.setState({
        shoppingCartItens,
      });
    }
  }

  handleClickDecrease(item) {
    const { shoppingCartItens } = this.state;

    shoppingCartItens
      .find((productItem) => productItem.productId === item.productId).quantity -= 1;

    this.setState({
      shoppingCartItens,
    });
  }

  getShoppingCartPrice() {
    const { shoppingCartItens } = this.state;

    return shoppingCartItens
      .reduce((acc, item) => acc + (item.productInfo[0].price * item.quantity), 0);
  }

  render() {
    const { shoppingCartItens } = this.state;
    const totalPrice = this.getShoppingCartPrice();

    if (shoppingCartItens.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <div>
        {shoppingCartItens.map((item) => (
          <div key={ item.productId } className="cart-item">
            <button type="button"> X </button>
            <img
              src={ item.productInfo[0].thumbnail }
              alt={ item.productInfo[0].title }
            />
            <h4 data-testid="shopping-cart-product-name">
              { item.productInfo[0].title }
            </h4>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.handleClickDecrease(item) }
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.handleClickIncrease(item) }
            >
              +
            </button>
            <p>{ `R$: ${item.productInfo[0].price}` }</p>
          </div>
        ))}

        <p>
          Valor Total da Compra:
          <span>{` R$ ${totalPrice}`}</span>
        </p>

        <Link to="/CheckoutPage" data-testid="checkout-products">Finalizar compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;
