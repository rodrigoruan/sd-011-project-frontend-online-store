import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      zipCode: '',
      adress: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState = () => {
    this.setState({
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      zipCode: '',
      adress: '',
    });
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { allProducts } = state;
    const { fullName, email, cpf, phone, zipCode, adress } = this.state;

    return (
      <div>
        <div>
          <h3>Revise seus Produtos</h3>
          {allProducts.map(({ thumbnail, title, price, count }, index) => (
            <div key={ index }>
              <img src={ thumbnail } alt={ title } />
              <span>{ `${title} - ${count} - R$${count * price}`}</span>
            </div>
          ))}
        </div>
        <form>
          <input
            onChange={ this.handleChange }
            name="fullName"
            value={ fullName }
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome completo"
          />
          <input
            onChange={ this.handleChange }
            name="email"
            value={ email }
            data-testid="checkout-email"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={ this.handleChange }
            name="cpf"
            value={ cpf }
            data-testid="checkout-cpf"
            type="text"
            placeholder="Cpf"
          />
          <input
            onChange={ this.handleChange }
            name="phone"
            value={ phone }
            data-testid="checkout-phone"
            type="text"
            placeholder="Telefone"
          />
          <input
            onChange={ this.handleChange }
            name="zipCode"
            value={ zipCode }
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
          />
          <input
            onChange={ this.handleChange }
            name="adress"
            value={ adress }
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
          />
        </form>
        <button onClick={ this.resetState } type="button">Comprar</button>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      allProducts: PropTypes.objectOf({
        title: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        count: PropTypes.number,
      }),
    }),
  }).isRequired,
};
