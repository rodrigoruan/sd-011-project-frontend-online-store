import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatesBR from '../services/states';

class Checkout extends Component {
  render() {
    return (
      <div>
        <section>
          <ul>Revise seus produtos</ul>
          {/* <li>produtos</li> */}
          {/* Valor total da compra */}
        </section>
        <section>
          Informações do Comprador
          <input
            type="text"
            data-testid="checkout-fullname"
            placeholder="Nome completo"
          />
          <input
            type="text"
            data-testid="checkout-cpf"
            placeholder="CPF"
            maxLength="11"
            min="0"
          />
          <input
            type="email"
            data-testid="checkout-email"
            placeholder="Email"
          />
          <input
            type="text"
            data-testid="checkout-phone"
            placeholder="Telefone"
            maxLength="11"
            min="0"
          />
          <input
            type="text"
            data-testid="checkout-cep"
            placeholder="CEP"
            maxLength="8"
            min="0"
          />
          <input
            type="text"
            data-testid="checkout-address"
            placeholder="Endereço"
          />
          <input
            type="text"
            placeholder="Complemento"
          />
          <input
            type="text"
            placeholder="Número"
          />
          <input
            type="text"
            placeholder="Cidade"
          />
          <select>
            <StatesBR />
          </select>
        </section>
        <section>
          Método de Pagamento
          <label htmlFor="boleto">
            <input type="radio" id="boleto" />
            Boleto
          </label>
          Cartão de Crédito:
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
          <button type="button">Comprar</button>
        </section>
        <Link to="/">Continuar comprando</Link>
      </div>
    );
  }
}

export default Checkout;
