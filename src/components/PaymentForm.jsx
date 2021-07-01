import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import '../styles/Form.css';

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
      <form className="form">
        <h3 className="is-size-4 has-text-centered">Informações do comprador</h3>
        <fieldset>
          <div className="field is-expanded">
            <p className="label">Nome</p>
            <div name className="control">
              <input
                className="input"
                name="nome"
                id="nome"
                type="text"
                placeholder="Nome Completo"
                data-testid="checkout-fullname"
                required
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div name className="control is-expanded">
                  <input
                    className="input"
                    name="cpf"
                    type="text"
                    placeholder="CPF"
                    data-testid="checkout-cpf"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div name className="control is-expanded">
                  <input
                    className="input"
                    name="Email"
                    type="text"
                    placeholder="Email"
                    data-testid="checkout-email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div name className="control is-expanded">
                  <input
                    className="input"
                    name="Telefone"
                    type="tel"
                    placeholder="Telefone"
                    data-testid="checkout-phone"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <p className="label">Endereço</p>
            <div name className="control">
              <input
                className="input"
                name="Endereço"
                type="text"
                placeholder="Endereço"
                data-testid="checkout-address"
                required
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div name className="control is-expanded">
                  <input
                    className="input"
                    name="Complemento"
                    type="text"
                    placeholder="Complemento"
                  />
                </div>
              </div>
              <div className="field">
                <div name className="control is-expanded">
                  <input
                    className="input"
                    name="Numero"
                    type="text"
                    placeholder="Numero"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div name className="control is-expanded">
                  <input
                    className="input"
                    name="CEP"
                    type="text"
                    placeholder="CEP"
                    data-testid="checkout-cep"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div name className="control is-expanded">
                  <input
                    className="input"
                    name="Cidade"
                    type="text"
                    placeholder="Cidade"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Estado</label>
            <div className="control">
              <div className="select">
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
                    Selecione um estado
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
              </div>
            </div>
          </div>
        </fieldset>

        <h3>Forma de pagamento</h3>
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
    );
  }
}

export default PaymentForm;
