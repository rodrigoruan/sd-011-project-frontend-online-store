import React, { Component } from 'react';

class FormularioPagamento extends Component {
  constructor() {
    super();

    this.getCartProducts = this.getCartProducts.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  getTotalPrice() {
    const productArray = JSON.parse(localStorage.getItem('products'));

    const productsArr = productArray.reduce((acc, { price, quantity }) => acc + parseFloat(price * quantity), 0);
    return productsArr;
  }

  getCartProducts() {
    const productArray = JSON.parse(localStorage.getItem('products'));

    const productsArr = productArray.map(({ id, title, price, quantity }) => (
      <div key={ id }>
        <p>{title}</p>
        <p>{price}</p>
        <p>{quantity}</p>
      </div>
    ));
    return productsArr;
  }

  render() {
    const totalPrice = this.getTotalPrice();
    return (
      <div>
        {this.getCartProducts()}
        <p>{totalPrice}</p>
        <form>
          <label htmlFor="input-complete-name">
            Nome completo
            <input data-testid="checkout-fullname" id="input-complete-name" />
          </label>
          <label htmlFor="input-email">
            Email
            <input data-testid="checkout-email" id="input-email" />
          </label>
          <label htmlFor="input-cpf">
            CPF
            <input data-testid="checkout-cpf" id="input-cpf" />
          </label>
          <label htmlFor="input-phone">
            Telefone
            <input data-testid="checkout-phone" id="input-phone" />
          </label>
          <label htmlFor="input-cep">
            CEP
            <input data-testid="checkout-cep" id="input-cep" />
          </label>
          <label htmlFor="input-address">
            Endereço
            <input data-testid="checkout-address" id="input-address" />
          </label>
        </form>
      </div>
    );
  }
}

export default FormularioPagamento;
