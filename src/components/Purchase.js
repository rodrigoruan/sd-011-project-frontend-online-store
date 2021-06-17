import React from 'react';
import PropTypes from 'prop-types';

class Purchase extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { total } = this.state;

    return (
      <div>
        <h2>Revise seus produtos</h2>
        <h4>{ `Total: ${total}` }</h4>
        <label htmlFor="name">
          <input type="string" data-testid="checkout-fullname" id="name" />
        </label>

        <label htmlFor="email">
          <input type="string" data-testid="checkout-email" id="email" />
        </label>

        <label htmlFor="cpf">
          <input type="string" data-testid="checkout-cpf" id="cpf" />
        </label>

        <label htmlFor="phone">
          <input type="string" data-testid="checkout-phone" id="phone" />
        </label>

        <label htmlFor="cep">
          <input type="string" data-testid="checkout-cep" id="cep" />
        </label>

        <label htmlFor="address">
          <input type="string" data-testid="checkout-address" id="address" />
        </label>
      </div>
    );
  }
}

Purchase.propTypes = {
  cart: PropTypes.array,
}.isRequired;

export default Purchase;
