import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CartProduct } from '../components/zComponentsMenu';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const emptyCartMessage = (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );
    const { cartItems, handleAddToCart, handleDecreaseQuantity,
      handleRemoveFromCart } = this.props;
    if (!cartItems) {
      return emptyCartMessage;
    }
    return cartItems.map((item) => (
      <CartProduct
        productData={ item }
        key={ item.id }
        handleAddToCart={ handleAddToCart }
        handleDecreaseQuantity={ handleDecreaseQuantity }
        handleRemoveFromCart={ handleRemoveFromCart }
      />
    ));
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleDecreaseQuantity: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};
