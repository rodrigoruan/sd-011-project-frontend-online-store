import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddAndRemoveCartItem extends Component {
  constructor() {
    super();
    this.state = {
      addButton: false,
      dccButton: false,
    };
  }

  increment = () => {
    const { title, price, thumbnail, onClick, quantity } = this.props;
    console.log(quantity);
    let count = JSON.parse(localStorage.getItem(title)).count + 1;
    if (count < quantity) {
      this.setState({
        dccButton: true,
        addButton: false,
      });
      const objeto = { count, title, price, thumbnail, quantity };
      localStorage.setItem(title, JSON.stringify(objeto));
    } else {
      this.setState({
        addButton: true,
      });
      count = quantity;
      const objeto = { count, title, price, thumbnail, quantity };
      localStorage.setItem(title, JSON.stringify(objeto));
    }
    onClick();
  };

  decrement = () => {
    const { title, price, thumbnail, onClick, quantity } = this.props;
    console.log(quantity);
    let count = JSON.parse(localStorage.getItem(title)).count - 1;
    if (count < 2) {
      count = 1;
    }
    if (count === quantity) {
      this.setState({
        addButton: true,
      });
    } else {
      this.setState({
        addButton: false,
      });
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
    const { addButton, dccButton } = this.state;
    return (
      <>
        <button
          disabled={ dccButton }
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.decrement }
        >
          -
        </button>
        <button
          disabled={ addButton }
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
