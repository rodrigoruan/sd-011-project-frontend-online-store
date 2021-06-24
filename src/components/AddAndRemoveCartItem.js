import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddAndRemoveCartItem extends Component {
  increment = () => {
    const { title, price, thumbnail, onClick, quantity } = this.props;
    let count = JSON.parse(localStorage.getItem(title)).count + 1;
    if (count < quantity) {
      const objeto = { count, title, price, thumbnail, quantity };
      localStorage.setItem(title, JSON.stringify(objeto));
    } else {
      count = quantity;
      const objeto = { count, title, price, thumbnail, quantity };
      localStorage.setItem(title, JSON.stringify(objeto));
    }
    onClick();
  };

  decrement = () => {
    const { title, price, thumbnail, onClick, quantity } = this.props;
    let count = JSON.parse(localStorage.getItem(title)).count - 1;
    if (count < 2) {
      count = 1;
    }
    const objeto = { count, title, price, thumbnail, quantity };
    localStorage.setItem(title, JSON.stringify(objeto));
    onClick();
  };

  removeCartItem = () => {
    const { title, onClick } = this.props;
    localStorage.removeItem(title);
    onClick();
  }

  render() {
    return (
      <>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.decrement }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.increment }
        >
          +
        </button>
        <button onClick={ this.removeCartItem } type="button">
          X
        </button>
      </>
    );
  }
}

AddAndRemoveCartItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
