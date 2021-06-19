import React from 'react';

class Purchase extends React.Component {
  render() {
    return (
      <div>
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

export default Purchase;
