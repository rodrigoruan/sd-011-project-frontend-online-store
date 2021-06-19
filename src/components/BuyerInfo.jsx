import React, { Component } from 'react';

export default class BuyerInfo extends Component {
  render() {
    return (
      <form>
        <label htmlFor="fullname-input">
          Nome Completo
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            id="fullname-input"
          />
        </label>

        <label htmlFor="checkout-input">
          Email
          <input
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
            id="email-input"
          />
        </label>

        <label htmlFor="cpf-input">
          CPF
          <input
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
            id="cpf-input"
          />
        </label>

        <label htmlFor="phone-input">
          Telefone
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
            id="phone-input"
          />
        </label>

        <label htmlFor="cep-input">
          CEP
          <input
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
            id="cep-input"
          />
        </label>

        <label htmlFor="adress-input">
          Endereço
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
            id="address-input"
          />
        </label>

        <button type="button">Finalizar a compra!</button>
      </form>
    );
  }
}
