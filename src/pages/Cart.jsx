import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';
import 'bulma/css/bulma.min.css';
import '../styles/Cart.css';

export default class Cart extends Component {
  constructor() {
    super();
    const cartList = {};
    Object.values(sessionStorage).forEach((value) => {
      if (!value.includes('rendererID')) {
        const item = JSON.parse(value);
        cartList[item.id] = item;
      }
    });
    const disabled = {};
    Object.values(sessionStorage).forEach((value) => {
      if (!value.includes('rendererID')) {
        const item = JSON.parse(value);
        disabled[item.id] = (item.quantity + 1) >= item.inStorage;
      }
    });

    this.state = {
      cartList,
      pay: false,
      disabled,
    };

    this.addItem = this.addItem.bind(this);
    this.decreasesItem = this.decreasesItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  componentDidUpdate() {
    const { cartList } = this.state;
    Object.values(cartList).forEach((listItem) => {
      const value = JSON.stringify(listItem);
      sessionStorage.setItem(listItem.id, value);
    });
  }

  addItem({ target: { name } }) {
    const { cartList } = this.state;
    const cart = { ...cartList };
    const item = { ...cart[name] };
    const disabled = (item.quantity + 1) >= item.inStorage;
    item.quantity += 1;
    cart[name] = item;
    this.setState((prevState) => ({
      cartList: cart,
      disabled: {
        ...prevState.disabled,
        [name]: disabled,
      },
    }));
  }

  decreasesItem(event) {
    const {
      target: { name },
    } = event;
    const { cartList } = this.state;
    const cart = { ...cartList };
    const item = { ...cart[name] };

    if (item.quantity === 1) {
      this.removeItem(event);
    } else {
      item.quantity -= 1;
      cart[name] = item;
      this.setState((prevState) => ({
        cartList: cart,
        disabled: {
          ...prevState.disabled,
          [name]: false,
        },
      }));
    }
  }

  removeItem({ target: { name } }) {
    const { cartList } = this.state;
    const cart = { ...cartList };
    delete cart[name];
    sessionStorage.removeItem(name);
    this.setState(() => ({
      cartList: cart,
    }));
  }

  totalPrice() {
    const { cartList } = this.state;
    let totalPrice = 0;
    Object.values(cartList).forEach(({ price, quantity }) => {
      totalPrice += price * quantity;
    });
    return totalPrice.toFixed(2);
  }

  elementList([id, { title, price, thumbnail, quantity }], disabled) {
    return (
      <div className="cart-item" key={ id }>
        <div className="size-15">
          <button
            className="button is-danger is-small"
            type="button"
            name={ id }
            onClick={ this.removeItem }
          >
            Remover
          </button>
          <div className="img-container">
            <img alt="Foto produto" src={ thumbnail } />
          </div>
        </div>
        <div className="size-60">
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{`R$ ${price.toFixed(2)}`}</p>
        </div>
        <div className="size-15">
          <button
            className="button is-small"
            data-testid="product-decrease-quantity"
            type="button"
            name={ id }
            onClick={ this.decreasesItem }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          <button
            className="button is-small"
            data-testid="product-increase-quantity"
            type="button"
            name={ id }
            disabled={ disabled[id] }
            onClick={ this.addItem }
          >
            +
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { cartList, disabled, pay } = this.state;
    const cartTitle = 'Carrinho de compras';
    if (Object.entries(cartList).length === 0) {
      return (
        <div className="cart-page">
          <Link className="button is-link" to="/">Voltar</Link>
          <h1 className="is-size-3 cart-title empty-title">{cartTitle}</h1>
          <img
            src="https://www.aquecedoresmorumbisul.com.br/image/catalog/pages/empty-cart-icon.png"
            alt="Carrinho vazio :("
            className="empty-cart-img"
          />
          <h3 className="center is-size-4" data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        </div>
      );
    }

    if (pay) {
      return (
        <div className="cart-page">
          <Link to="/">Voltar</Link>
          <div className="title-price-wrapper">
            <h1 className="is-size-3 cart-title">{cartTitle}</h1>
            <p className="total-price">
              {`Preço total: R$${this.totalPrice()}`}
            </p>
          </div>
          {Object.entries(cartList).map(
            (cartItem) => (
              this.elementList(cartItem, disabled)
            ),
          )}
          <PaymentForm />
        </div>
      );
    }

    return (
      <div className="cart-page">
        <Link className="button is-link" to="/">Voltar</Link>
        <div className="title-price-wrapper">
          <h1 className="is-size-3 cart-title">{cartTitle}</h1>
          <p className="is-size-4 cart-title">{`Preço total: R$${this.totalPrice()}`}</p>
        </div>
        {Object.entries(cartList).map(
          (cartItem) => (
            this.elementList(cartItem, disabled)
          ),
        )}

        <button
          className="buy-btn button is-primary is-large"
          type="button"
          data-testid="checkout-products"
          onClick={ () => this.setState({ pay: true }) }
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}
