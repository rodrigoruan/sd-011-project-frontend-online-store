import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkout extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { allProducts } = state;
    return (
      <div>
        <h3>Revise seus Produtos</h3>
        {allProducts.map(({ thumbnail, title, price, count }, index) => (
          <div key={ index }>
            <img src={ thumbnail } alt={ title } />
            <span>{ `${title} - ${count} - R$${count * price}`}</span>
          </div>
        ))}
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      allProducts: PropTypes.objectOf({
        title: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        count: PropTypes.number,
      }),
    }),
  }).isRequired,
};
