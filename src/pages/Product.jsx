import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  getInstallmentsElement({ installments }) {
    if (installments && installments.quantity && installments.amount) {
      return <p>{`Em até: ${installments.quantity}x de R$${installments.amount}` }</p>;
    }
    return null;
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const {
      title,
      thumbnail,
      shipping,
      availableQuantity,
      soldQuantity,
      price,
    } = product;

    return (
      <section>
        Especificações do produto
        <div>
          <h1 data-testid="product-detail-name">{ title}</h1>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          { shipping.free_shipping ? <p>Free Shipping</p> : '' }
          { availableQuantity ? (
            <p>{ `Produtos Disponíveis: ${availableQuantity}` }</p>
          )
            : '' }
          { soldQuantity ? <p>{ `Produtos Ventidos: ${soldQuantity}` }</p> : '' }
          <h2>Formas de pagamento</h2>
          <p>{ `R$${price}` }</p>
          { this.getInstallmentsElement(product) }
        </div>
      </section>
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool,
        }),
        availableQuantity: PropTypes.number,
        soldQuantity: PropTypes.string,
        installments: PropTypes.shape({
          quantity: PropTypes.number,
          amount: PropTypes.number,
        }),
        price: PropTypes.number,
      }),
    }),
  }),
}.isRequired;
