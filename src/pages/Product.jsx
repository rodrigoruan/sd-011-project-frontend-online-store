import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { location: { state:  { product } } } = this.props;
    console.log(product);
    return (
      <main>
        <section>
          <h1>Especificações do produto</h1>
          <h1>{ `${product.title} - R$${product.price}` }</h1>
          <img src={ product.thumbnail } alt={ product.title }/>
        </section>
        <section>
          <h1>Formas de pagamento</h1>
          { product.shipping.free_shipping ? <p>Free Shipping</p> : ''}
          <p>{ `Disponível: ${product.available_quantity}` }</p>
          <p>{ `${product.installments.amount}` }</p>
        </section>

        <section>
          <h1>Avaliações</h1>
        </section>
      </main>
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape(({
    state: PropTypes.shape({
      title: PropTypes.string,
    }),
  })),
}.isRequired;
