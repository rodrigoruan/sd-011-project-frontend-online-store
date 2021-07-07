import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import style from './Checkout.module.css';

export default class Checkout extends React.Component {
  getProducts() {
    return JSON.parse(localStorage.getItem('products'));
  }

  render() {
    return (
      <section className={ style.container }>
        {
          this.getProducts().map(({ id, title, thumbnail, price, quantity }) => (
            <div className={ style.product } key={ id }>
              <h1>{ title }</h1>
              <img src={ thumbnail } alt={ title } />
              <p>
                {`R$ ${price}`}
              </p>
              <p>
                {`Quantidade: ${quantity}`}
              </p>
            </div>
          ))
        }
        <CheckoutForm />
      </section>
    );
  }
}
