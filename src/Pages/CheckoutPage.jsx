import React, { Component } from 'react';
import StatesBR from '../services/states';

class Checkout extends Component {
  render() {
    return (
      <div>
        <section>
          <ul>Revise seus produtos</ul>
          {/* <li>produtos</li> */}
          <p>valor total da compra:</p>
        </section>
        <section>
          Informações do Comprador
          <br />
          <input
            type="text"
            data-testid="checkout-fullname"
            placeholder="Nome completo"
          />
          <input
            type="text"
            maxLength="11"
            min="0"
            data-testid="checkout-cpf"
            placeholder="CPF"
          />
          <input type="email" data-testid="checkout-email" placeholder="Email" />
          <input
            type="text"
            maxLength="11"
            min="0"
            data-testid="checkout-phone"
            placeholder="Telefone"
          />
          <br />
          <input
            type="text"
            maxLength="8"
            min="0"
            data-testid="checkout-cep"
            placeholder="CEP"
          />
          <input type="text" data-testid="checkout-address" placeholder="Endereço" />
          <br />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Cidade" />
          <select>
            <StatesBR />
          </select>
        </section>
        <section>
          <br />
          Método de Pagamento
          <br />
          <label htmlFor="boleto">
            <input type="radio" id="boleto" />
            Boleto
          </label>
          <br />
          Cartão de Crédito:
          <br />
          <label htmlFor="creditCard">
            <span id="creditCard">
              <input type="radio" />
              Visa
              <input type="radio" />
              MasterCard
              <input type="radio" />
              Elo
            </span>
          </label>
          <br />
          <button type="button">Comprar</button>
        </section>
      </div>
    );
  }
}

export default Checkout;
