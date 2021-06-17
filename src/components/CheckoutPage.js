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
            <input data-testid="checkout-fullname" type="text" />
          </label>
          <br />
          <label htmlFor="checkout">
            E-mail:
            <input data-testid="checkout-email" type="email" />
          </label>
          <br />
          <label htmlFor="checkout">
            CPF:
            <input data-testid="checkout-cpf" type="text" />
          </label>
          <br />
          <label htmlFor="checkout">
            Telefone:
            <input data-testid="checkout-phone" type="text" />
          </label>
          <br />
          <label htmlFor="checkout">
            CEP:
            <input data-testid="checkout-cep" type="text" />
          </label>
          <br />
          <label htmlFor="checkout">
            Endereço:
            <input data-testid="checkout-address" type="text" />
          </label>
        </form>
        <br />
        <form>

          Forma de pagamento:
          <br />
          <label htmlFor="boleto">
            Boleto
            <input type="radio" value="boleto" name="boleto" />
          </label>
          <br />
          Cartão de Crédito
          <label htmlFor="cartao">
            <input type="radio" value="visa" name="visa" />
            Visa
          </label>
          <label htmlFor="cartao">
            <input type="radio" value="mastercard" name="visa" />
            MasterCard
          </label>
          <label htmlFor="cartao">
            <input type="radio" value="elo" name="visa" />
            Elo
          </label>
        </form>
        <button type="button"> Finalizar compra </button>
      </div>
    );
  }
}
