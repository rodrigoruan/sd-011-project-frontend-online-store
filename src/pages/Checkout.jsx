import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EmptyCart, BuyerInfo } from '../components';

export default class Checkout extends Component {
  render() {
    const { shoppingCart, getTotalPrice } = this.props;
    const { itemList } = shoppingCart;
    const totalPrice = getTotalPrice();
    return (
      <main>
        { itemList.length
          ? (
            <section>
              <section>
                <h1>Revise seus Produtos</h1>
                { itemList.map((item) => (
                  <section key={ item.id }>
                    <p>{ item.title }</p>
                    <picture>
                      <img src={ item.thumbnail } alt={ item.title } />
                    </picture>
                  </section>
                )) }
              </section>
              <section>
                { `Valor Total: R$${totalPrice}` }
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
  shoppingCart: PropTypes.object,
  getTotalPrice: PropTypes.func,
}.isRequired;
