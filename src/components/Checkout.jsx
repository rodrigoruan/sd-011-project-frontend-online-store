import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import back from '../images/arrow_back.svg';
import './ShopCart.css';
import './Checkout.css';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = initialFormState;
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      paymentMethod,
    } = this.state;
    const error = [];
    if (fullname === '') {
      error.push('fullname');
    }
    if (email === '') {
      error.push('email');
    }
    if (cpf === '') {
      error.push('cpf');
    }
    if (phone === '') {
      error.push('phone');
    }
    if (cep === '') {
      error.push('cep');
    }
    if (address === '') {
      error.push('address');
    }
    if (paymentMethod === '') {
      error.push('paymentMethod');
    }
    if (error.length) {
      return;
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
        <header className="checkout-header">
          <Link exact to="/cart">
            <img src={ back } alt="Cart" className="back" />
          </Link>
          <h1> Checkout </h1>
          <div style={ { width: '50px' } } />
        </header>
        <div className="body-checkout">
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
            <div className="price-total">
              <h2>
                {`Valor Total da Compra: R$${cartItems.reduce((acc, curr) => (
                  acc + (curr.quantity * curr.price)), 0).toFixed(2)}`}
              </h2>
            </div>
          </div>
          <CheckoutForm
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
          />
        </div>
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
