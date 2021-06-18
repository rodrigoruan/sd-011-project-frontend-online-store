import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CheckoutPage extends Component {
  render() {
    // const { location } = this.props;
    // const { state } = location;
    // const { title, thumbnail, price, id } = state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <section>
          Aqui irão aparecer os itens
        </section>
        <form>
          <label htmlFor="checkout">
            Nome completo:
            <input data-testid="checkout-fullname" type="text" required />
          </label>
          <br />
          <label htmlFor="checkout">
            E-mail:
            <input data-testid="checkout-email" type="email" required />
          </label>
          <br />
          <label htmlFor="checkout">
            CPF:
            <input data-testid="checkout-cpf" type="text" required />
          </label>
          <br />
          <label htmlFor="checkout">
            Telefone:
            <input data-testid="checkout-phone" type="text" required />
          </label>
          <br />
          <label htmlFor="checkout">
            CEP:
            <input data-testid="checkout-cep" type="text" required />
          </label>
          <br />
          <label htmlFor="checkout">
            Endereço:
            <input data-testid="checkout-address" type="text" required />
          </label>
          <br />
          Forma de pagamento:
          <br />
          <label htmlFor="payment">
            Boleto
            <input type="radio" value="boleto" name="payment" required />
            <br />
            Cartão de Crédito
            <input type="radio" value="visa" name="payment" />
            Visa
            <input type="radio" value="mastercard" name="payment" />
            MasterCard
            <input type="radio" value="elo" name="payment" />
            Elo
            <br />
          </label>
          <button type="submit"> Finalizar compra </button>

        </form>
      </div>
    );
  }
}
