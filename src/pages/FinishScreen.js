import React, { Component } from 'react';
import PaymentMethod from '../components/PaymentMethod';
import BuyerInformation from '../components/BuyerInformation';

export default class FinishScreen extends Component {
  render() {
    return (
      <div>
        <PaymentMethod />
        <BuyerInformation />
      </div>
    );
  }
}
