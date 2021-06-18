import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backImg from '../imgs/Seta.png';
import CartProductsAmount from '../components/CartProductsAmount/CartProductsAmount';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPaymentMethod: null,
    };
    this.changePaymentMethod = this.changePaymentMethod.bind(this);
  }

  changePaymentMethod({ target }) {
    this.setState({ selectedPaymentMethod: target.value });
  }

  render() {
    const { shopCart } = this.props;
    const { selectedPaymentMethod } = this.state;

    return (
      <div>
        <Link to="/">
          <img
            width="30px"
            src={ backImg }
            alt="imagem de voltar"
          />
        </Link>
        <CartProductsAmount shopCart={ shopCart } />
        <section>
          <h3>Revise seus Produtos</h3>
          {shopCart.map(({ id, title }) => (
            <p key={ id }>{title}</p>
          ))}
        </section>
        <form>
          <div>
            <h3>Informações do Comprador</h3>
            <input
              type="text"
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
            />
            <input
              type="text"
              placeholder="CPF"
              data-testid="checkout-cpf"
            />
            <input
              type="text"
              placeholder="Email"
              data-testid="checkout-email"
            />
            <input
              type="text"
              placeholder="Telefone"
              data-testid="checkout-phone"
            />
            <input
              type="text"
              placeholder="CEP"
              data-testid="checkout-cep"
            />
            <input
              type="text"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
            <input type="text" placeholder="Complemento" />
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Cidade" />
            <select name="estado">
              <option value="SP">SP</option>
              <option value="MG">MG</option>
              <option value="RS">RS</option>
            </select>
          </div>
          <div>
            <h3>Método de Pagamento</h3>
            <label htmlFor="boleto">
              Boleto
              <input
                type="radio"
                name="boleto"
                value="boleto"
                checked={ selectedPaymentMethod === 'boleto' }
                onChange={ this.changePaymentMethod }
              />
            </label>
            <label htmlFor="visa">
              Visa
              <input
                type="radio"
                name="visa"
                value="visa"
                checked={ selectedPaymentMethod === 'visa' }
                onChange={ this.changePaymentMethod }
              />
            </label>
            <label htmlFor="mastercard">
              MasterCard
              <input
                type="radio"
                name="mastercard"
                value="mastercard"
                checked={ selectedPaymentMethod === 'mastercard' }
                onChange={ this.changePaymentMethod }
              />
            </label>
            <label htmlFor="elo">
              Elo
              <input
                type="radio"
                name="elo"
                value="elo"
                checked={ selectedPaymentMethod === 'elo' }
                onChange={ this.changePaymentMethod }
              />
            </label>
          </div>
          <button type="button">Comprar</button>
        </form>
      </div>
    );
  }
}
Checkout.propTypes = {
  shopCart: PropTypes.object,
}.isRequired;
