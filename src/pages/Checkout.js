import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

export default class Checkout extends React.Component {
  getProducts() {
    return JSON.parse(localStorage.getItem('products'));
  }

  render() {
    return (
      <section>
        {
          this.getProducts().map(({ id, title, thumbnail, price, quantity }) => (
            <div key={ id }>
              <p>{ title }</p>
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
