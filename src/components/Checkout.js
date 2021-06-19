import React, { Component } from 'react';
import Cart from './Cart';

class Checkout extends Component {
  render() {
    return (
      <fieldset>
        <Cart />
        <form>
          <input
            data-testid="checkout-fullname"
            name="nome"
            placeholder="Digite seu nome"
            type="text"
          />
          <input
            data-testid="checkout-email"
            name="email"
            type="email"
            placeholder="Digite seu email"
          />
          <input
            data-testid="checkout-cpf"
            name="cpf"
            placeholder="CPF"
            type="text"
          />
          <input
            data-testid="checkout-phone"
            name="phone"
            placeholder="Telefone"
            type="text"
          />
          <input
            data-testid="checkout-cep"
            name="cep"
            placeholder="CEP"
            type="text"
          />
          <input
            data-testid="checkout-address"
            name="adress"
            placeholder="Endereço"
            type="text"
          />
        </form>
      </fieldset>
    );
  }
}

export default Checkout;
