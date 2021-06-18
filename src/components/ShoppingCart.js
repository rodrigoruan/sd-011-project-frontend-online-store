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

  plusItem = (id) => {
    const { someCounter } = this.props;
    const cart = JSON.parse(localStorage.ShoppingCart);
    const objJSON = cart.map((element) => {
      if (element.id === id) element.counter += 1;
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

  render() {
    return (
      <div>
        {
          (JSON.parse(localStorage.ShoppingCart).length === 0)
            ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            : JSON.parse(localStorage.ShoppingCart).map((product, index) => (
              <div key={ index }>
                <p data-testid="shopping-cart-product-name">{ product.title }</p>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.lessItem(product.id) }
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">{product.counter}</p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.plusItem(product.id) }
                >
                  +
                </button>
              </div>
            ))
        }
        <Link to="/">Voltar</Link>
        <Link to="/CheckoutPage">
          <button type="button" data-testid="checkout-products">Finalizar compra</button>
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
