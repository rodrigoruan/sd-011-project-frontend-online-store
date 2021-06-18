import React, { Component } from 'react';
import { CartProduct } from '../components/zComponentsMenu';
import * as storage from '../services/storage';
import { Redirect} from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect:false
    };
  }

  handleBuyAction = () => {
    const { cartItems } = this.props;
    storage.saveStorage(cartItems);
    console.log(localStorage);
    this.setState({shouldRedirect:true})
  };

  componentDidMount() {
    const { cartItems } = this.props;
    let getPrice = 0;
    // cartItems.forEach((el) =>
      // getPrice += el.price
      // console.log(el)
    // );
    console.log(getPrice);
  }

  render() {
    const emptyCartMessage = (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );
    const { cartItems, handleAddToCart, handleDecreaseQuantity, handleRemoveFromCart } = this.props;
    if (!cartItems) {
      return emptyCartMessage;
    }
    if(this.state.shouldRedirect)
    {return <Redirect to = '/checkout'/>}
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
        <h5>Valor total :</h5>
        <button data-testid="checkout-products" onClick={this.handleBuyAction}>
        Comprar
        </button>
      </div>
    );
  }
}
