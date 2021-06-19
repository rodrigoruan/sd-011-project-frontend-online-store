import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EmptyCart, BuyerInfo } from '../components';

export default class Checkout extends Component {
  render() {
    const { productList, getTotalPrice } = this.props;
    const totalPrice = getTotalPrice();
    return (
      <main>
        { productList.length
          ? (
            <section>
              <section>
                <h1>Revise seus Produtos</h1>
                { productList.map((item) => (
                  <section key={ item.id }>
                    <p>{ item.title }</p>
                    <picture>
                      <img src={ item.thumbnail } alt={ item.title } />
                    </picture>
                  </section>
                )) }
              </section>
              <section>
                { totalPrice }
              </section>
              <section>
                <h1>Informações do comprador</h1>
                <BuyerInfo />
              </section>
              <section>
                <h1>Método de pagamento</h1>
              </section>
              <section>
                <button type="submit">
                  Comprar
                </button>
              </section>
            </section>
          )
          : (
            <EmptyCart />
          )}
      </main>
    );
  }
}

Checkout.propTypes = {
  productList: PropTypes.object,
  getTotalPrice: PropTypes.func,
}.isRequired;
