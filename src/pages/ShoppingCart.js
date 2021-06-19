import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingItem from '../components/ShoppingItem';

class ShoppingCart extends Component {
  totalPriceCart() {
    const { productsCart } = this.props;
    if (productsCart) {
      const total = Object.values(productsCart)
        .reduce((acc, { details, quantity }) => acc + (details.price * quantity), 0);
      return total;
    }
    return 0;
  }

  render() {
    const { productsCart, onClick, forceAppUpdate } = this.props;
    return (
      <div>
        <p>ShoppingCart</p>
        {!productsCart ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (Object.values(productsCart).map(({ details, quantity }) => (<ShoppingItem
          key={ details.id }
          productCart={ details }
          quantity={ quantity }
          onClick={ onClick }
          forceAppUpdate={ forceAppUpdate }
        />))
        )}
        <p>{ this.totalPriceCart() }</p>
        <Link to="/">Voltar</Link>
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;

ShoppingCart.propTypes = {
  forceAppUpdate: PropTypes.func,
  onClick: PropTypes.func,
  productCart: PropTypes.objectOf(PropTypes.object),
}.isRequired;
