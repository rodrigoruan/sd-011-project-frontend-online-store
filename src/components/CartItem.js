import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { productInfo } = this.props;
    const { title, thumbnail, price } = productInfo;
    return (
      <li>
        <h5 data-testid="shopping-cart-product-name">{ title }</h5>
        <div>
          <img src={ thumbnail } alt={ title } />
          <span>{ `R$ ${price.toFixed(2)}` }</span>
        </div>
        <div>
          <button type="button">+</button>
          <button type="button">-</button>
        </div>
      </li>
    );
  }
}

CartItem.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
