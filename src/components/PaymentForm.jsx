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
      <form className="form">
        <h3 className="is-size-4 has-text-centered">Informações do comprador</h3>
        <fieldset>
          <div className="my-field is-expanded">
            <p className="label">Nome</p>
            <div className="control">
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

          <div className="my-field is-horizontal">
            <div className="field-body">
              <div className="my-field">
                <div className="control is-expanded">
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
              <div className="my-field">
                <div className="control is-expanded">
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
              <div className="my-field">
                <div className="control is-expanded">
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

          <div className="my-field">
            <p className="label">Endereço</p>
            <div className="control">
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

          <div className="my-field is-horizontal">
            <div className="field-body">
              <div className="my-field">
                <div className="control is-expanded">
                  <input
                    className="input"
                    name="Complemento"
                    type="text"
                    placeholder="Complemento"
                  />
                </div>
              </div>
              <div className="my-field">
                <div className="control is-expanded">
                  <input
                    className="input"
                    name="Numero"
                    type="text"
                    placeholder="Numero"
                    required
                  />
                </div>
              </div>
              <div className="my-field">
                <div className="control is-expanded">
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
              <div className="my-field">
                <div className="control is-expanded">
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

          <div className="my-field">
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
        <div>
          <button
            className="button is-danger is-large center"
            type="button"
            onClick={
              () => { window.location.pathname = '/'; }
            }
          >
            Seguir para a forma de pagamento
          </button>
        </div>
      </form>
    );
  }
}

export default PaymentForm;
