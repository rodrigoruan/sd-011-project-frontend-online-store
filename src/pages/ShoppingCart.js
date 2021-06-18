import React, { Component } from 'react';
import { CartProduct } from '../components/zComponentsMenu';
import * as storage from '../services/storage';
import { Redirect } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
      totalPrice: 0,
      cartItems: [],
    };
    this.sumProducts = this.sumProducts.bind(this);
    this.setCartItems = this.setCartItems.bind(this);
  }

  handleBuyAction = () => {
    const { cartItems } = this.props;
    storage.saveStorage(cartItems);
    console.log(localStorage);
    this.setState({ shouldRedirect: true });
  };

  componentDidMount() {
    this.sumProducts();
    this.setCartItems();
  }

  sumProducts = () => {
    const { cartItems } = this.props;
    if (cartItems) {
      const reducer = (a, b) => (a.price * a.quantity + b.price * b.quantity).toFixed(2);
      const totalPrice = cartItems.reduce(reducer);
      this.setState({ totalPrice });
      this.forceUpdate();
    }
  };

  setCartItems = () => {
    const { cartItems } = this.props;
    this.setState({ cartItems });
  };

  // componentDidUpdate(prevProps, prevState) {}

  render() {
    const emptyCartMessage = (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );
    const { cartItems, handleAddToCart, handleDecreaseQuantity, handleRemoveFromCart } = this.props;
    if (!cartItems) {
      return emptyCartMessage;
    }
    if (this.state.shouldRedirect) {
      return <Redirect to="/checkout" />;
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
        <h5>Valor total : {this.state.totalPrice}</h5>
        <button data-testid="checkout-products" onClick={this.handleBuyAction}>
          Comprar
        </button>
      </div>
    );
  }
}
