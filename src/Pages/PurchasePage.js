import React, { Component } from 'react';
// import Shopcart from './Shopcart';

export default class PurchasePage extends Component {
  render() {
    return (
      <div>
        {/* <Shopcart /> */}
        <form method="GET">
          <label htmlFor="name">
            <input data-testid="checkout-fullname" id="name" type="text" />
          </label>
          <label htmlFor="email">
            <input data-testid="checkout-email" id="email" type="text" />
          </label>
          <label htmlFor="CPF">
            <input id="CPF" data-testid="checkout-cpf" type="text" />
          </label>
          <label htmlFor="telefone">
            <input id="telefone" data-testid="checkout-phone" type="text" />
          </label>
          <label htmlFor="endereco">
            <input id="endereco" data-testid="checkout-address" type="text" />
          </label>
          <label htmlFor="CEP">
            <input id="CEP" data-testid="checkout-cep" type="text" />
          </label>
        </form>
      </div>
    );
  }
}
