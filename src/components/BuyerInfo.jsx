import React, { Component } from 'react';
import States from './States';

export default class BuyerInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Informações do Comprador</h2>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
            />
            <input
              type="text"
              placeholder="CPF"
              data-testid="checkout-email"
            />
            <input
              type="text"
              placeholder="Email"
              data-testid="checkout-cpf"
            />
            <input
              type="text"
              placeholder="Telefone"
              data-testid="checkout-phone"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="CEP"
              data-testid="checkout-cep"
            />
            <input
              type="text"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Complemento"
            />
            <input
              type="text"
              placeholder="Numero"
            />
            <input
              type="text"
              placeholder="Cidade"
            />
            <States />
          </div>
        </div>
      </div>
    );
  }
}
