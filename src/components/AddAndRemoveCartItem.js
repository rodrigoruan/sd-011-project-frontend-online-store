import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddAndRemoveCartItem extends Component {
  increment = () => {
    const { title, price, thumbnail } = this.props;
    const count = JSON.parse(localStorage.getItem(title)).count + 1;
    const objeto = { count, title, price, thumbnail };
    localStorage.setItem(title, JSON.stringify(objeto));
  }

  decrement = () => {
    const { title, price, thumbnail } = this.props;
    let count = JSON.parse(localStorage.getItem(title)).count - 1;
    if (count < 2) {
      count = 1;
    }
    const objeto = { count, title, price, thumbnail };
    localStorage.setItem(title, JSON.stringify(objeto));
  }

  render() {
    const { operator } = this.props;

    if (operator === '-') {
      return (
        <button
          dataTestId="product-decrease-quantity"
          type="button"
          onClick={ this.decrement }
        >
          -
        </button>
      );
    }

    return (
      <button
        dataTestId="product-increase-quantity"
        type="button"
        onClick={ this.increment }
      >
        +
      </button>
    );
  }
}

AddAndRemoveCartItem.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
