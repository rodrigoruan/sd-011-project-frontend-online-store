import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { location: { state:  { product } } } = this.props;
    console.log(product);
    return (
      <section>
        Especificações do produto
        <div>
          <h1>{ `${product.title} - R$${product.price}` }</h1>
          <img src={ product.thumbnail } alt={ product.title }/>
        </div>
        <div>
          { product.shipping.free_shipping ? <p>Free Shipping</p> : ''}
          <p>{ `Quantide: ${product.available_quantity}` }</p>
          <h2>Formas de pagamento</h2>
          <p>{ `${product.installments.amount}` }</p>
        </div>
        <div>
        </div>
      </section>
    );
  }
}
