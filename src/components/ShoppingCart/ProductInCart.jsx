import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductInCart extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((item) => (
          <div key={ item.id }>
            <img src={ item.thumbnail } alt="Product Thumbnail" />
            <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
            <div>
              <button type="button">-</button>
              <h5 data-testid="shopping-cart-product-quantity">{item.counter}</h5>
              <button type="button">+</button>
              <h5>{item.price * item.counter}</h5>
              <span>{ item.currency }</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ProductInCart.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
};
