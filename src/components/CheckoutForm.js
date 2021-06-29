import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereco: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      fullName,
      email,
      cpf,
      telefone,
      cep,
      endereco,
    } = this.state;

    return (
      <form>
        <label htmlFor="checkout-fullname">
          <input
            data-testid="checkout-fullname"
            id="checkout-fullname"
            type="text"
            name="fullName"
            value={ fullName }
            onChange={ this.handleChange }
            placeholder="Nome completo"
          />
        </label>
        <label htmlFor="checkout-email">
          <input
            data-testid="checkout-email"
            id="checkout-email"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
          />
        </label>
        <label htmlFor="checkout-cpf">
          <input
            data-testid="checkout-cpf"
            id="checkout-cpf"
            type="text"
            name="cpf"
            value={ cpf }
            onChange={ this.handleChange }
            placeholder="CPF"
          />
        </label>
        <label htmlFor="checkout-phone">
          <input
            data-testid="checkout-phone"
            id="checkout-phone"
            type="text"
            name="telefone"
            value={ telefone }
            onChange={ this.handleChange }
            placeholder="Telefone"
          />
        </label>
        <label htmlFor="checkout-cep">
          <input
            data-testid="checkout-cep"
            id="checkout-cep"
            type="text"
            name="cep"
            value={ cep }
            onChange={ this.handleChange }
            placeholder="CEP"
          />
        </label>
        <label htmlFor="checkout-address">
          <textarea
            data-testid="checkout-address"
            id="checkout-address"
            type="text"
            name="endereco"
            value={ endereco }
            onChange={ this.handleChange }
            placeholder="Endereco"
          />
        </label>
        <button type="button" onClick={ this.handleClick }>Comprar</button>
      </form>
    );
  }
}
