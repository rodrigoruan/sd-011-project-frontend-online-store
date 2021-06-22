import React, { Component } from 'react';
import PaymentMethod from '../components/PaymentMethod';
import BuyerInformation from '../components/BuyerInformation';
import * as storage from '../services/storage';
import { CartProduct } from '../components/zComponentsMenu';

export default class FinishScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getCartProducts = () => {
    const cartItem = storage.readStorage('cartStorage');
    if (cartItem) {
      return cartItem.map((el, index) => <CartProduct cartItem={ el } key={ index } />);
    }
  };

  render() {
    return (
      <div>
        <div>
          <h3>Revise seus produtos:</h3>
          {this.getCartProducts()}
        </div>
        <BuyerInformation />
        <PaymentMethod />
      </div>
    );
  }
}
