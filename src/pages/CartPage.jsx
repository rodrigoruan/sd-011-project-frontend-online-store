import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemsCart from '../components/ItemsCart';

export default class CartPage extends Component {
  componentDidMount() {
  }

  render() {
    // Funções: removeFromCart, addToCart, decreaseFromCart
    // Objetos: cart
    const { cart, removeFromCart, addToCart, decreaseFromCart } = this.props;

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
            cart.map((cartProduct, index) => (
              <ItemsCart
                key={ index }
                removeFromCart={ removeFromCart }
                cartProduct={ cartProduct }
                cart={ cart }
                addToCart={ addToCart }
                decreaseFromCart={ decreaseFromCart }
              />
            ))
          }

        </div>
      </div>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.instanceOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  decreaseFromCart: PropTypes.func.isRequired,
};
