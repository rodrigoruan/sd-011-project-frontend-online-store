import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import closeButton from '../images/close-button.png';
import './ShoppingCart.css';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
    const items = JSON.parse(localStorage.getItem('items'));
    const quantity = JSON.parse(localStorage.getItem('quantity'));
    this.state = {
      items,
      quantity,
    };
  }

  componentWillUnmount() {
    const { items, quantity } = this.state;
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('quantity', JSON.stringify(quantity));
  }

  increaseQuantity(event, availableQuantity) {
    const { quantity } = this.state;
    const {
      target: { name, id },
    } = event;
    if (availableQuantity > quantity[name][id]) {
      quantity[name][id] += 1;
      this.setState({
        quantity,
      });
    }
  }

  decreaseQuantity(event) {
    const { quantity } = this.state;
    const {
      target: { name, id },
    } = event;
    if (quantity[name][id] >= 1) {
      quantity[name][id] -= 1;
    }
    this.setState({
      quantity,
    });
  }

  removeAllItems(event) {
    const { items } = this.state;
    const {
      target: { id },
    } = event;
    this.setState({
      items: items.filter((product) => product.id !== id),
    });
  }

  render() {
    let totalPrice = 0;
    const { items, quantity } = this.state;
    return (
      <div className="shopping-cart">
        <div className="main">
          <div className="home-link">
            <Link to="/"><button className="home" type="button">Home</button></Link>
          </div>
          {items === null ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )
            : items.map(
              ({ title,
                thumbnail,
                price,
                id,
                available_quantity: availableQuantity }, index) => {
                totalPrice += price * quantity[index][id];
                return (
                  <div
                    key={ index }
                    data-testid="shopping-cart-product-name"
                    className="cart-product"
                  >
                    <button
                      className="close-button"
                      type="button"
                      onClick={ this.removeAllItems }
                    >
                      <img src={ closeButton } alt="close button" id={ id } />
                    </button>
                    <img src={ thumbnail } alt="Foto do Produto" />
                    <p className="cart-product-name">{title}</p>
                    <button
                      name={ index }
                      id={ id }
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={ this.decreaseQuantity }
                    >
                      -
                    </button>
                    <p data-testid="shopping-cart-product-quantity">
                      {`Quantidade: ${quantity[index][id]}`}
                    </p>
                    <button
                      name={ index }
                      id={ id }
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={
                        (event) => this.increaseQuantity(event, availableQuantity)
                      }
                    >
                      +
                    </button>
                    <p>{`Preço: R$${price}`}</p>
                  </div>
                );
              },
            )}
        </div>
        <div className="total-price">
          <p>{`Valor total: R$${totalPrice.toFixed(2)}`}</p>
          <Link to="/checkout" data-testid="checkout-products">
            <button type="button">
              Finalizar compra
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
