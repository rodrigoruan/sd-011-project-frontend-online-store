import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { CartProduct } from '../components/zComponentsMenu';
import { getCart, saveStorage } from '../services/storage';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      totalPrice: 5,
    };
  }

  componentDidMount() {
    this.sumProducts();
  }

  handleBuyAction = () => {
    const cartItems = getCart();
    saveStorage(cartItems);
    this.setState({ shouldRedirect: true });
  };

  sumProducts = () => {
    const cartItems = getCart();
    if (cartItems.length > 0) {
      const reducer = (a, b) => {
        return a + b.price * b.quantity;
      };
      return cartItems.reduce(reducer, 0).toFixed(2);
    }
    return '';
  };

  render() {
    const { handleAddToCart, handleDecreaseQuantity, handleRemoveFromCart } = this.props;
    const { shouldRedirect } = this.state;
    const emptyCartMessage = (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );

    const cartItems = getCart();
    if (!cartItems || Object.keys(cartItems).length < 1) {
      return emptyCartMessage;
    }
    if (shouldRedirect) {
      return <Redirect to="/checkout" />;
    }
    return (
      <div>
        {cartItems.map((item) => (
          <CartProduct
            cartItem={item}
            key={item.id}
            handleAddToCart={handleAddToCart}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
        <h5>Valor total:{this.sumProducts()}</h5>

        <button type="button" data-testid="checkout-products" onClick={this.handleBuyAction}>
          Finalizar compra
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.shape({
    map: PropTypes.func,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleDecreaseQuantity: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};
