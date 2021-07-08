import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartItem from '../components/ShoppingCartItem';

class ShoppingCart extends Component {
  render() {
    const { cartList, updateItemQtyInCart } = this.props;
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
        {Object.keys(cartList).map((item) => (
          <ShoppingCartItem
            key={ Math.random() }
            id={ item }
            title={ cartList[item].title }
            price={ cartList[item].price }
            qty={ cartList[item].qty }
            thumbnail={ cartList[item].thumbnail }
            updateItemQtyInCart={ updateItemQtyInCart }
          />
        ))}
        <Link to="/checkout" data-testid="checkout-products">
          <button type="button">Finalizar Compra</button>
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.shape({}).isRequired,
  updateItemQtyInCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
