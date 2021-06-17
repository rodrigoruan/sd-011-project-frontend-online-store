import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    const { cart: { price } } = this.props;
    this.state = {
      quantity: 1,
      totalPrice: price,
    };
    // this.handeClick = this.handeClick.bind(this);
  }

  render() {
    const { quantity, totalPrice } = this.state;
    const { cart: { title, price } } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">
          {title}
        </h3>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {quantity}
        </p>
        <p>
          Preço total:
          {totalPrice}
        </p>
        <button type="button">+</button>
        <button type="button">-</button>
      </div>
    );
  }
}

CartItem.propTypes = {
  cart: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
