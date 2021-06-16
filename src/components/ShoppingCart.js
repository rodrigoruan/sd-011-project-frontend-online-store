import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductListCart from './ProductListCart';

export default class ShoppingCart extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    console.log(location);
    return (
      <div>
        { state.length === 0
          ? <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio </div>
          : (state.map((item) => (
            <ProductListCart
              products={ item }
              key={ item.title }
            />))) }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};
