import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import backImage from '../images/back.png';

export default class Checkout extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      paymentMethod: '',
    };
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
    let formValidation = true;
    if (fullname === '') {
      formValidation = false;
    }
    if (email === '') {
      formValidation = false;
    }
    if (cpf === '') {
      formValidation = false;
    }
    if (phone === '') {
      formValidation = false;
    }
    if (cep === '') {
      formValidation = false;
    }
    if (address === '') {
      formValidation = false;
    }
    if (paymentMethod === '') {
      formValidation = false;
    }

    if (formValidation) return <Redirect to="/" />;
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div>
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
