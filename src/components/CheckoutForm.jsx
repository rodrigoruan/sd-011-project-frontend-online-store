import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CheckoutForm extends Component {
  render() {
    return (
      <div>
        <p>Preencha os dados para finalizar a compra:</p>
        <form>
          <label htmlFor="checkout-fullname">
            Nome Completo
            <input data-testid="checkout-fullname" type="text" id="checkout-fullname" />
          </label>
          <label htmlFor="checkout-email">
            E-mail
            <input data-testid="checkout-email" type="text" id="checkout-email" />
          </label>
          <label htmlFor="checkout-cpf">
            CPF
            <input data-testid="checkout-cpf" type="text" id="checkout-cpf" />
          </label>
          <label htmlFor="checkout-phone">
            Telefone
            <input data-testid="checkout-phone" type="text" id="checkout-phone" />
          </label>
          <label htmlFor="checkout-cep">
            CEP
            <input data-testid="checkout-cep" type="text" id="checkout-cep" />
          </label>
          <label htmlFor="checkout-address">
            Endereço
            <input data-testid="checkout-address" type="text" id="checkout-address" />
          </label>
          <Link to="/">
            <button type="button">Finalizar compra</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
