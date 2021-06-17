import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Revise seus Produtos</legend>
            {/* carregar produtos aqui */}
          </fieldset>
          <fieldset>
            <legend>Informações do Comprador</legend>
            <input
              type="text"
              placeholder="Nome Completo"
              name="inputFullName"
              data-testid="checkout-fullname"
            />
            <input
              type="text"
              placeholder="CPF"
              name="inputCpf"
              data-testid="checkout-cpf"
              maxLength="11"
            />
            <input
              type="email"
              placeholder="Email"
              name="inputEmail"
              data-testid="checkout-email"
            />
            <input
              type="tel"
              placeholder="Telefone"
              name="inputTelephone"
              data-testid="checkout-phone"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              maxLength="11"
            />
            <input
              type="text"
              placeholder="CEP"
              name="inputCep"
              data-testid="checkout-cep"
              maxLength="9"
            />
            <input
              type="text"
              placeholder="Endereço"
              name="inputAdress"
              data-testid="checkout-address"
            />
            <input
              type="text"
              placeholder="Complemento"
              name="inputHouseType"
            />
            <input
              type="text"
              placeholder="Numero"
              name="inputHouseNumber"
            />
            <input
              type="text"
              placeholder="Cidade"
              name="inputCity"
            />
            {/* criar estado e outros componentes? */}
          </fieldset>
          <fieldset>
            <legend>Método de pagamento</legend>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Checkout;
