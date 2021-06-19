import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import backImage from '../images/back.png';

const initialFormState = {
  fullname: '',
  email: '',
  cpf: '',
  phone: '',
  cep: '',
  address: '',
  paymentMethod: '',
  formIsValid: false,
};

export default class Checkout extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.state = initialFormState;
  }

  handleValidation() {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      paymentMethod,
    } = this.state;
    if (fullname === '') {
      return console.log('Nome completo deve ser preenchido!');
    }
    if (email === '') {
      return console.log('Email deve ser preenchido!');
    }
    if (cpf === '') {
      return console.log('CPF deve ser preenchido!');
    }
    if (phone === '') {
      return console.log('Telefone deve ser preenchido!');
    }
    if (cep === '') {
      return console.log('CEP deve ser preenchido!');
    }
    if (address === '') {
      return console.log('Endereço deve ser preenchido!');
    }
    if (paymentMethod === '') {
      return console.log('Método de pagamento deve ser preenchido!');
    }
    this.setState({ formIsValid: true });
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { cartItems } = this.props;
    const { formIsValid } = this.state;
    if (formIsValid) return <Redirect to="/" />;
    return (
      <div className="checkout-container">
        <Link exact to="/cart">
          <img src={ backImage } alt="Cart" style={ { width: '50px' } } />
        </Link>
        <div className="checkout-products-review">
          <h2>Revise seus Produtos</h2>
          { cartItems.map((item) => (
            <div className="checkout-product" key={ item.id }>
              <img
                className="image-product-cart"
                src={ item.thumbnail }
                alt={ item.id }
              />
              <p className="cart-product-title">
                { item.title }
              </p>
              <p className="price-params">{`Quantidade: ${item.quantity}`}</p>
              <p className="price-params">{`Valor unitário: R$ ${item.price}`}</p>
              <p
                className="price-params"
              >
                {`Valor total: R$ ${(item.price * item.quantity).toFixed(2)}`}
              </p>
            </div>))}
          <div className="total-price">
            {`Valor Total da Compra: R$${cartItems.reduce((acc, curr) => (
              acc + (curr.quantity * curr.price)), 0).toFixed(2)}`}
          </div>
        </div>
        <CheckoutForm handleChange={ this.handleChange } />
        <button
          className="finish-checkout-button"
          type="button"
          onClick={ this.handleValidation }
        >
          Comprar
        </button>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    length: PropTypes.number,
    map: PropTypes.func,
    quantity: PropTypes.number,
    reduce: PropTypes.func,
  }).isRequired,
};
