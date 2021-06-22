import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import BuyerInfo from '../components/BuyerInfo';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    const { location: { state } } = props;
    const cart = state ? state.cart : [];
    this.state = {
      redirectCheckout: false,
      checkoutResume: [...cart],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      redirectCheckout: true,
    });
  }

  render() {
    const { redirectCheckout, checkoutResume } = this.state;
    return (
      <div>
        <div>
          <Link to="/">
            Voltar
          </Link>
        </div>
        <div>
          <h2>Revise seus Produtos</h2>
          { checkoutResume.map(({ id, title, price, thumbnail }) => (
            <div key={ id }>
              <p>{ title }</p>
              <p><img src={ thumbnail } alt={ title } /></p>
              <p>
                R$
                { price }
              </p>
            </div>
          ))}
        </div>
        <div>
          <BuyerInfo />
        </div>
        <div>
          <h2>Método de Pagamento</h2>
        </div>
        <div>
          <button
            type="button"
            onClick={ this.handleChange }
          >
            Comprar
          </button>
          { redirectCheckout ? <Redirect to="/CheckoutSuccessful" /> : null }
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
