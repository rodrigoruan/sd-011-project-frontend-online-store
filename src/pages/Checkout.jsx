import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Checkout extends Component {
  render() {
    const { cartList } = this.props;

    return (
      <div>
        <button type="button">
          <Link to="/">Voltar</Link>
        </button>
        <div>
          <p>Revise seus produtos</p>
          <div>
            <ul>
              {Object.keys(cartList).map((item, index) => (
                <div
                  key={ index }
                >
                  <p>{ cartList[item].title }</p>
                  <p>{cartList[item].price }</p>
                  <p>{ cartList[item].qty }</p>
                  <img src={ cartList[item].thumbnail } alt="foto do produto" />
                </div>
              ))}
            </ul>
          </div>
          <p>
            Total: R$
            <span>
              { Object.keys(cartList)
                .reduce((acc, crr) => cartList[crr].qty * cartList[crr].price + acc, 0) }
            </span>
          </p>
        </div>
        <form>
          <fieldset>
            Informações do comprador
            <div>
              <input
                type="text"
                data-testid="checkout-fullname"
                placeHolder="Nome completo"
              />
              <input
                type="email"
                data-testid="checkout-email"
                placeHolder="E-mail"
              />
              <input
                type="text"
                data-testid="checkout-cpf"
                placeHolder="CPF"
              />
              <input
                type="text"
                data-testid="checkout-phone"
                placeHolder="Telefone"
              />
            </div>
            <div>
              <input
                type="text"
                data-testid="checkout-cep"
                placeHolder="CEP"
              />
              <input
                type="text"
                data-testid="checkout-address"
                placeHolder="Endereço"
              />
            </div>
          </fieldset>
          <fieldset>
            Método de Pagamento:
            <label htmlFor="radio1">
              <input type="radio" name="radio" id="radio1" />
              Boleto
            </label>
            <label htmlFor="radio2">
              <input type="radio" name="radio" id="radio2" />
              Cartão de Crédito
            </label>
            <label htmlFor="radio3">
              <input type="radio" name="radio" id="radio3" />
              Pix
            </label>
          </fieldset>
        </form>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartList: PropTypes.shape({}).isRequired,
};

export default Checkout;
