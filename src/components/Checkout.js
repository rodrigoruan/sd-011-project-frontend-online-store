import React from 'react';

export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        <h1>Dados de compra</h1>
        <form>
          <fieldset>
            <legend>Revise seus produtos</legend>
          </fieldset>
          <fieldset>
            <legend>Informações do comprador</legend>
            <input
              name="inputText"
              data-testid="checkout-fullname"
              type="text"
              placeholder="fullname"
            />
            <input
              name="inputText"
              data-testid="checkout-email"
              type="email"
              placeholder="E-mail"
            />
            <input
              name="inputText"
              data-testid="checkout-cpf"
              type="text"
              placeholder="cpf"
            />
            <input
              name="inputText"
              data-testid="checkout-phone"
              type="tel"
              placeholder="phone"
            />
            <input
              name="inputText"
              data-testid="checkout-cep"
              type="text"
              placeholder="cep"
            />
            <input
              name="inputText"
              data-testid="checkout-address"
              type="text"
              placeholder="Address"
            />
          </fieldset>
          <fieldset>
            <legend>Método de pagamento</legend>
          </fieldset>
        </form>
      </div>
    );
  }
}
