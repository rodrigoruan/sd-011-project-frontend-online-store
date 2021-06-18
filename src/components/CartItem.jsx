import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartQuantity from './CartQuantity';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operator) {
    const { cart: { available_quantity: available } } = this.props;
    const { quantity } = this.state;
    if (operator === 'increase' && quantity < available) {
      this.setState((previousState) => ({
        quantity: previousState.quantity + 1,
      }));
    }
    if (operator === 'decrease' && quantity > 1) {
      this.setState((previousState) => ({
        quantity: previousState.quantity - 1,
      }));
    }
  }

  render() {
    const { quantity } = this.state;
    const { cart: { title, price } } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">
          {title}
        </h3>
        <p>
          Preço de cada um:
          {price}
        </p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {quantity}
        </p>
        <p>
          Preço total:
          {quantity * price}
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => { this.handleClick('increase'); } }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => { this.handleClick('decrease'); } }
        >
          -
        </button>
        <CartQuantity />
      </div>
    );
  }
}

CartItem.propTypes = {
  cart: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
  }).isRequired,
};
