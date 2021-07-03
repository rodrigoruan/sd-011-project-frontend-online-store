import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../CSS/Checkout.css';
import Cardcheckout from './Cardcheckout';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: JSON.parse(localStorage.getItem('cart')),
      redirect: false,
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complemento: '',
      number: 0,
      city: '',
    };

    this.total = this.total.bind(this);
    this.handleState = this.handleState.bind(this);
    this.clearStorage = this.clearStorage.bind(this);
  }

  handleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  clearStorage(event) {
    event.preventDefault();
    localStorage.removeItem('cart');
    localStorage.removeItem('totalPrice');
    alert('Parabéns, seu cartão foi clonado!');
    this.setState({
      redirect: true,
    });
  }

  total() {
    const { cartProducts } = this.state;
    const price = cartProducts.map((product) => product.price * product.quantity);
    return price.reduce((init, current) => init + current, 0).toFixed(2);
  }

  renderNameInput() {
    const {
      name,
      cpf,
      email,
      phone,
      cep,
      address,
      complemento,
      number,
      city } = this.state;

    return (
      <>
        <input
          name="name"
          placeholder="Nome Completo"
          data-testid="checkout-fullname"
          type="text"
          value={ name }
          onChange={ this.handleState }
          required
        />
        <input
          name="cpf"
          type="text"
          placeholder="CPF"
          data-testid="checkout-cpf"
          value={ cpf }
          onChange={ this.handleState }
          required
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          data-testid="checkout-email"
          value={ email }
          onChange={ this.handleState }
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Telefone"
          data-testid="checkout-phone"
          value={ phone }
          onChange={ this.handleState }
          required
        />
        <input
          name="cep"
          type="text"
          placeholder="CEP"
          data-testid="checkout-cep"
          value={ cep }
          onChange={ this.handleState }
          required
        />
        <input
          name="address"
          type="text"
          placeholder="Endereço"
          data-testid="checkout-address"
          value={ address }
          onChange={ this.handleState }
          required
        />
        <input
          name="complemento"
          type="text"
          placeholder="Complemento"
          value={ complemento }
          onChange={ this.handleState }
          required
        />
        <input
          name="number"
          type="number"
          placeholder="Número"
          value={ number }
          onChange={ this.handleState }
          required
        />
        <input
          name="city"
          type="text"
          placeholder="Cidade"
          value={ city }
          onChange={ this.handleState }
          required
        />
        <select name="estado">
          <option>Estado</option>
          <option>Mato Grosso</option>
          <option>Minas Gerais</option>
          <option>Paraná</option>
          <option>São Paulo</option>
        </select>
      </>
    );
  }

  renderPaymentInput() {
    return (
      <>
        <p>Boleto</p>
        <label htmlFor="input-boleto">
          <input
            type="radio"
            id="input-boleto"
            name="Pagamento"
            value="Boleto"
            required
          />
        </label>
        <p>Cartão de Crédito</p>
        <label htmlFor="cartao-visa">
          Visa
          <input
            type="radio"
            id="cartao-visa"
            name="Pagamento"
            value="visa-card"
            required
          />
        </label>
        <label htmlFor="cartao-visa">
          MasterCard
          <input
            type="radio"
            id="cartao-visa"
            name="Pagamento"
            value="mastercard-card"
            required
          />
        </label>
        <label htmlFor="cartao-visa">
          Elo
          <input
            type="radio"
            id="cartao-visa"
            name="Pagamento"
            value="elo-card"
            required
          />
        </label>
      </>
    );
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="checkout-div">
        <Link to="/Cart" className="checkout-cart-link">voltar para o carrinho</Link>
        <div className="checkout-main-content">
          <Cardcheckout />
          <div className="checkout-forms">
            <form onSubmit={ this.clearStorage }>
              <p className="checkout-total-price">{`Total a pagar: R$${this.total()}`}</p>
              <h3>Informações do Comprador</h3>
              <fieldset>
                {this.renderNameInput()}
              </fieldset>
              <h3>Método de Pagamento</h3>
              <fieldset>
                {this.renderPaymentInput()}
              </fieldset>
              <button type="submit">Comprar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
