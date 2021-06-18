import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EmptyCart } from '../components';

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
