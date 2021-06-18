import React, { Component } from 'react';
// import CardCreator from '../components/CardCreator';
import CartItem from '../components/CartItem';

class Checkout extends Component {
  constructor() {
    super();
    this.state = { totalPrice: JSON.parse(localStorage.getItem('addingCart')) || [],
      forms: {
        fullname: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        address: '',
        paymode: '',
      },
      // error: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((previousState) => ({ forms: { ...previousState.forms, [name]: value },
    }));
    console.log(value);
  }

  render() {
    const {
      totalPrice,
      forms: { fullname, email, cpf, phone, cep, address } } = this.state;
    console.log(fullname, email, cpf, phone, cep, address);
    const cart = JSON.parse(localStorage.getItem('addingCart'));
    if (cart) {
      return (
        <div>
          {cart
            .map((result, index) => (
              <div key={ index }>
                <CartItem cart={ result } />
              </div>
            ))}
          <p>{ totalPrice.reduce((acc, curr) => acc + curr.price, 0) }</p>
          <form>
            <input
              onChange={ this.handleChange }
              value={ fullname }
              name="fullname"
              type="text"
              data-testid="checkout-fullname"
              placeholder="nome completo"
            />
            <input
              onChange={ this.handleChange }
              value={ email }
              name="email"
              type="text"
              data-testid="checkout-email"
              placeholder="email"
            />
            <input
              onChange={ this.handleChange }
              value={ cpf }
              name="cpf"
              type="text"
              data-testid="checkout-cpf"
              placeholder="cpf"
            />
            <input
              onChange={ this.handleChange }
              value={ phone }
              name="phone"
              type="text"
              data-testid="checkout-phone"
              placeholder="fone"
            />
            <input
              onChange={ this.handleChange }
              value={ cep }
              name="cep"
              type="text"
              data-testid="checkout-cep"
              placeholder="cep"
            />
            <input
              onChange={ this.handleChange }
              value={ address }
              name="address"
              type="text"
              data-testid="checkout-address"
              placeholder="endereço"
            />
            <div>
              <input
                onChange={ this.handleChange }
                name="paymode"
                type="radio"
                value="boleto"
              />
              Boleto
              <input
                onChange={ this.handleChange }
                name="paymode"
                type="radio"
                value="visa"
              />
              Visa
              <input
                onChange={ this.handleChange }
                name="paymode"
                type="radio"
                value="mastercard"
              />
              Mastercard
              <input
                onChange={ this.handleChange }
                name="paymode"
                type="radio"
                value="elo"
              />
              Elo
            </div>
            <button type="submit">enviar</button>
          </form>

        </div>
      );
    }
    if (!cart) {
      return (
        <div>não tem nada no seu carinho</div>
      );
    }
  }
}

export default Checkout;
