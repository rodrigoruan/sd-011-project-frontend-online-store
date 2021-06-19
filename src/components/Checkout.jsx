import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Muitas coisas foram comentadas para o componente ser renderizado. Terminar o requisito 12 amanhã, lembrar de colocar a handleState() em todos os inputs que refenciam o state. Lembrar também de limpar o estado após submitar o formulário.

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: JSON.parse(localStorage.getItem('cart')),
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complemento: '',
      number: 0,
      city: '',
      // estado: '',
      // payOption: false,
    };

    this.buildCard = this.buildCard.bind(this);
    this.total = this.total.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  clearState() {
    // this.setState({
    //   name: '',
    //   cpf: '',
    //   email: '',
    //   phone: '',
    //   cep: '',
    //   address: '',
    //   complemento: '',
    //   number: 0,
    //   city: '',
    //   estado: '',
    // });
  }

  buildCard() {
    const { cartProducts } = this.state;
    return cartProducts.map((product) => (
      <div key={ product.id } className="checkout-product-card">
        <img
          className="checkout-product-img"
          src={ product.thumbnail }
          alt="imagem"
          width="100px"
        />
        <p>{product.title}</p>
        <p>{`R$ ${product.price}` }</p>
      </div>
    ));
  }

  total() {
    const { cartProducts } = this.state;
    const price = cartProducts.map((product) => product.price);
    return price.reduce((init, current) => init + current, 0);
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
    return (
      <div>
        <Link to="/Cart">voltar para o carrinho</Link>
        <div className="checkout-products-list">
          <h3>Revise seus Produtos</h3>
          {this.buildCard()}
          <p>{`Total: ${this.total()}`}</p>
        </div>
        <form>
          <h3>Informações do Comprador</h3>
          <fieldset>
            {this.renderNameInput()}
          </fieldset>
          <h3>Método de Pagamento</h3>
          <fieldset>
            {this.renderPaymentInput()}
          </fieldset>
          <button type="submit" onClick={ this.clearState }>Comprar</button>
        </form>
      </div>
    );
  }
}
