import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { stateListApi: [] };

    this.handleApiState = this.handleApiState.bind(this);
  }

  componentDidMount() {
    this.handleApiState();
  }

  handleApiState() {
    this.getStates()
      .then((result) => this.setState({ stateListApi: result }));
  }

  async getStates() {
    return fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then((result) => result.json());
  }

  render() {
    const { stateListApi } = this.state;

    return (
      <div>
        <form>
          <fieldset>

            <h3>Informações do comprador</h3>
            <label htmlFor="nome">
              <input
                name="nome"
                type="text"
                placeholder="Nome Completo"
                data-testid="checkout-fullname"
                required
              />
            </label>

            <label htmlFor="cpf">
              <input
                name="cpf"
                type="text"
                placeholder="CPF"
                data-testid="checkout-cpf"
                required
              />

            </label>

            <label htmlFor="Email">
              <input
                name="Email"
                type="text"
                placeholder="Email"
                data-testid="checkout-email"
                required
              />
            </label>

            <label htmlFor="Telefone">
              <input
                name="Telefone"
                type="text"
                placeholder="Telefone"
                data-testid="checkout-phone"
                required
              />
            </label>

            <label htmlFor="CEP">
              <input
                name="CEP"
                type="text"
                placeholder="CEP"
                data-testid="checkout-cep"
                required
              />
            </label>

            <label htmlFor="Endereço">
              <input
                name="Endereço"
                type="text"
                placeholder="Endereço"
                data-testid="checkout-address"
                required
              />
            </label>

            <label htmlFor="Complemento">
              <input
                name="Complemento"
                type="text"
                placeholder="Complemento"
              />
            </label>

            <label htmlFor="Numero">
              <input
                name="Numero"
                type="text"
                placeholder="Numero"
                required
              />
            </label>

            <label htmlFor="Cidade">
              <input
                name="Cidade"
                type="text"
                placeholder="Cidade"
                required
              />
            </label>

            <select
              name="Cidade"
              required
            >
              <option
                key="placeHolder"
                value="initial"
                name="Estado"
                selected
              >
                Estado
              </option>
              { stateListApi.map((result) => (
                <option
                  key={ result.sigla }
                  value={ result.sigla }
                  name="Estado"
                >
                  { result.nome }
                </option>))}
            </select>
          </fieldset>

          <fieldset>

            <label htmlFor="boleto">
              <input type="radio" id="boleto" name="payment-form" value="boleto" />
              Boleto
            </label>

            <label htmlFor="visa">
              <input type="radio" id="visa" name="payment-form" value="visa" />
              Visa
            </label>

            <label htmlFor="master">
              <input type="radio" id="master" name="payment-form" value="master" />
              Master
            </label>

            <label htmlFor="elo">
              <input type="radio" id="elo" name="payment-form" value="elo" />
              Elo
            </label>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default PaymentForm;
