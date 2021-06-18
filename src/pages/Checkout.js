import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      products: '',
    };
    this.retrieveCart = this.retrieveCart.bind(this);
  }

  componentDidMount() {
    this.retrieveCart();
  }

  retrieveCart() {
    const currentCart = localStorage.getItem('shoppingCart');
    if (currentCart) {
      this.setState({ products: JSON.parse(currentCart) });
    }
  }

  renderInput(placeholder, name, type) {
    return (
      <label htmlFor={ `checkout-${name}` }>
        <input
          data-testid={ `checkout-${name}` }
          type={ type }
          placeholder={ placeholder }
        />
      </label>
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h3>Revise seus Produtos</h3>
        { products ? <CheckoutItem products={ products } /> : <h3>Loading...</h3>}
        <form>
          <h3>Informações do Comprador</h3>
          {this.renderInput('Nome completo', 'fullname', 'text')}
          {this.renderInput('CPF', 'cpf', 'text')}
          {this.renderInput('E-mail', 'email', 'text')}
          {this.renderInput('Telefone', 'phone', 'text')}
          {this.renderInput('CEP', 'cep', 'text')}
          {this.renderInput('Endereço', 'address', 'text')}
        </form>
        <section>
          <h3>Método de Pagamento</h3>
          <label htmlFor="control">
            Boleto
            <input
              type="radio"
              name="payment"
            />
          </label>
          <label htmlFor="control">
            Cartão de Crédito
            <input
              type="radio"
              name="payment"
            />
          </label>
        </section>
        <button type="button">Comprar</button>
        <Link to="/shoppingcart">Voltar</Link>
      </div>
    );
  }
}

export default Checkout;

Checkout.propTypes = ({
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}).isRequired;
