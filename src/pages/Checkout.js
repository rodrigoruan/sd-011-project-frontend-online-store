import React, { Component } from 'react';
import PaymentMethod from '../components/PaymentMethod';
import BuyerInformation from '../components/BuyerInformation';
import * as storage from '../services/storage';
import { CartProduct } from '../components/zComponentsMenu';

export default class FinishScreen extends Component {
  render() {
    const products = storage.readStorage('cartStorage');
    console.log(products);
    return (
      <div>
        <div>
          <h3>Revise seus produtos:</h3>
          {products.map((el, index) => {
            return <CartProduct productData={el} key={index} />;
          })}
        </div>
        <BuyerInformation />
        <PaymentMethod />
      </div>
    );
  }
}
