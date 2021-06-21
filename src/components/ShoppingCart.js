import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      shouldRefresh: true,
    };
  }

  plusItem = (id, availableQuantity) => {
    const { someCounter } = this.props;
    const cart = JSON.parse(localStorage.ShoppingCart);
    const objJSON = cart.map((element) => {
      if (element.id === id) {
        if (element.counter < availableQuantity) {
          element.counter += 1;
        } else {
          element.counter = availableQuantity;
        }
      }
      return element;
    });
    localStorage.ShoppingCart = JSON.stringify(objJSON);
    this.setState((previus) => ({ shouldRefresh: previus.shouldRefresh }));
    someCounter();
  }

  lessItem = (id) => {
    const { someCounter } = this.props;
    const cart = JSON.parse(localStorage.ShoppingCart);
    const objJSON = cart.map((element) => {
      if (element.id === id) {
        if (element.counter > 1) {
          element.counter -= 1;
        } else {
          element.counter = 1;
        }
      }
      return element;
    });
    localStorage.ShoppingCart = JSON.stringify(objJSON);
    this.setState((previus) => ({ shouldRefresh: previus.shouldRefresh }));
    someCounter();
  }

  removeItem = (id) => {
    const { someCounter } = this.props;
    const cart = JSON.parse(localStorage.ShoppingCart);
    const objJSON = cart.filter((element) => element.id !== id);
    localStorage.ShoppingCart = JSON.stringify(objJSON);
    someCounter();
  }

  render() {
    if (JSON.parse(localStorage.ShoppingCart).length === 0) {
      return (
        <div className="div-all-cart-items">
          <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio...</h2>
        </div>
      );
    }
    return (
      <div className="div-all-cart-items">
        {
          JSON.parse(localStorage.ShoppingCart).map((product, index) => (
            <div className="cart-item" key={ index }>
              <div className="cart-item-div">
                <button
                  className="btn-items"
                  type="button"
                  onClick={ () => this.removeItem(product.id) }
                >
                  X
                </button>
                <div className="cart-item-info">
                  <img
                    className="cart-item-img"
                    alt={ product.title }
                    src={ product.thumbnail }
                  />
                  <div className="cart-item-text">
                    <p dataestid="shopping-cart-product-name">{ product.title }</p>
                  </div>
                </div>
                <button
                  className="btn-items"
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.lessItem(product.id) }
                >
                  -
                </button>
                <div className="cart-item-counter">
                  <p data-testid="shopping-cart-product-quantity">{product.counter}</p>
                </div>
                <button
                  className="btn-items"
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.plusItem(product.id, product.availableQuantity) }
                >
                  +
                </button>
              </div>
            </div>
          ))
        }
        <h2 className="cart-item cart-total">
          Total da compra: R$
          {
            JSON.parse(localStorage.ShoppingCart).reduce((acc, cur) => {
              acc += cur.price * cur.counter;
              return acc;
            }, 0).toFixed(2).replace('.', ',')
          }
        </h2>
        <Link to="/CheckoutPage">
          <button
            className="btn-items btn-checkout"
            type="button"
            data-testid="checkout-products"
          >
            Finalizar compra
          </button>
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      ProductId: PropTypes.string,
    }),
  }).isRequired,
  someCounter: PropTypes.func.isRequired,
};
