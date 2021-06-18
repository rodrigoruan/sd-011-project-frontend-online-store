import React, { Component } from 'react';
import { CartProduct } from '../components/zComponentsMenu';
import * as storage from '../services/storage';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleBuyAction = () => {
    const { cartItems } = this.props;
    storage.saveStorage(cartItems);
    console.log(localStorage);
  };

  render() {
    const emptyCartMessage = (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );
    const { cartItems, handleAddToCart, handleDecreaseQuantity, handleRemoveFromCart } = this.props;
    if (!cartItems) {
      return emptyCartMessage;
    }
    return (
      <div>
        {cartItems.map((item) => (
          <CartProduct
            productData={item}
            key={item.id}
            handleAddToCart={handleAddToCart}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
        <button data-testid="checkout-products" onClick={this.handleBuyAction}>
          <Link to="/checkout">Comprar</Link>
        </button>
      </div>
    );
  }
}
