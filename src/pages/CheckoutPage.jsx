import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutPage extends Component {
  render() {
    const { cart } = this.props;
    const total = cart.reduce((acc, { price }) => acc + price, 0);
    console.log(total);

    return (
      <div>
        <div className="className">
          {
            cart.map((product, index) => {
              const { title, thumbnail, price } = product;
              return (
                <div key={ index } className="cart-item">
                  <h3 data-testid="shopping-cart-product-name">{ title }</h3>
                  <img src={ thumbnail } alt="Product Thumbnail" />
                  <span>
                    R$
                    { price }
                  </span>
                  <span data-testid="shopping-cart-product-quantity" />
                </div>
              );
            })
          }
          <span>
            Total: R$
            { total }
          </span>
        </div>
        <form action="">
          <input
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            type="text"
          />
          <input
            placeholder="Email"
            data-testid="checkout-email"
            type="text"
          />
          <input
            placeholder="CPF"
            data-testid="checkout-cpf"
            type="text"
          />
          <input
            placeholder="Telefone"
            data-testid="checkout-phone"
            type="text"
          />
          <input
            placeholder="CEP"
            data-testid="checkout-cep"
            type="text"
          />
          <input
            placeholder="Endereço"
            data-testid="checkout-address"
            type="text"
          />
        </form>
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  cart: PropTypes.instanceOf(PropTypes.object).isRequired,
};
