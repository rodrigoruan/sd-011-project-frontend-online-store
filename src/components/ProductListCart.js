import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductListCart extends Component {
  render() {
    const { products: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="shopping-cart-product-name">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>
          R$
          {price}
        </p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}

ProductListCart.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
