import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkout extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { allProducts } = state;
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
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome completo"
          />
          <input
            data-testid="checkout-email"
            type="text"
            placeholder="Email"
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="Cpf"
          />
          <input
            data-testid="checkout-phone"
            type="text"
            placeholder="Telefone"
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
          />
        </form>
        <button type="button">Comprar</button>
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
