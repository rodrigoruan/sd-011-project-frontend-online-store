import React, { Component } from 'react';
/* req12 */

export default class BuyerInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

    handleChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    }

    render() {
      const { fullName, cpf, email, phone, cep, address } = this.state;

      return (
        <div>
          <h2>Informações do Comprador:</h2>

          <input
            type="text"
            name="fullName"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            value={ fullName }
            onChange={ this.handleChange }
          />

          <input
            type="text"
            name="cpf"
            data-testid="checkout-cpf"
            placeholder="CPF"
            value={ cpf }
            onChange={ this.handleChange }
          />

          <input
            type="text"
            name="email"
            data-testid="checkout-email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />

          <input
            type="text"
            name="phone"
            data-testid="checkout-phone"
            placeholder="Telefone"
            value={ phone }
            onChange={ this.handleChange }
          />

          <input
            type="text"
            name="cep"
            data-testid="checkout-cep"
            placeholder="CEP"
            value={ cep }
            onChange={ this.handleChange }
          />

          <input
            type="text"
            name="address"
            data-testid="checkout-address"
            placeholder="Endereço"
            value={ address }
            onChange={ this.handleChange }
          />
        </div>
      );
    }
}
