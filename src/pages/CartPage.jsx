import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CartPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    // Funções: removeFromCart
    // Objetos: cart
    const { cart, removeFromCart } = this.props;

    if (!cart.length) {
      return (
        <div>
          <Link className="home-button" to="/">Voltar</Link>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
      );
    }

    return (
      <div className="cartpage-container">
        <Link to="/">Voltar</Link>
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          Finalizar Compra
        </Link>
        <div className="cart-list">
          {
            cart.map((product, index) => {
              const { title, thumbnail, price } = product;
              return (
                <div key={ index } className="cart-item">
                  <h3 data-testid="shopping-cart-product-name">{ title }</h3>
                  <img src={ thumbnail } alt="Product Thumbnail" />
                  <span>
                    R$
                    { price }
                  </span>
                  <span data-testid="shopping-cart-product-quantity">
                    Quantidade:
                    { 1 }
                  </span>
                  <button data-testid="product-increase-quantity" type="button">+</button>
                  <button data-testid="product-decrease-quantity" type="button">+</button>
                  <button
                    type="button"
                    onClick={ () => removeFromCart(product) }
                  >
                    Remover
                  </button>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.instanceOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};
