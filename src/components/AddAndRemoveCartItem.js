import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class AddAndRemoveCartItem extends Component {
  constructor(props) {
    super(props);
    const { title, operator } = this.props;
    let count = 1;
    if (operator === '-') {
      count = JSON.parse(localStorage.getItem(title)).count - 1;
    } else {
      count = JSON.parse(localStorage.getItem(title)).count + 1;
    }
    this.state = {
      count,
    };
  }

  increment = () => {
    const { title, price, thumbnail } = this.props;
    const contador = JSON.parse(localStorage.getItem(title)).count + 1;
    localStorage.setItem(title, JSON.stringify(objeto));


    this.setState((oldValue) => ({ count: oldValue.count + 1 }));
    const { count } = this.state;
    const objeto = { count, title, price, thumbnail };
  }

  decrement = () => {
    const { title, price, thumbnail } = this.props;
    this.setState((oldValue) => ({ count: oldValue.count - 1 }));
    const { count } = this.state;
    if (count < 2) {
      this.setState({ count: 1 });
    }
    const objeto = { count, title, price, thumbnail };
    localStorage.setItem(title, JSON.stringify(objeto));
  }

  render() {
    const { dataTestId, operator } = this.props;

    if (operator === '-') {
      return (
        <Link to="/CarItems">
          <button
            data-testid={ dataTestId }
            type="button"
            onClick={ this.decrement }
          >
            -
          </button>
        </Link>
      );
    }

    return (
      <Link to="/CartItems">
        <button
          data-testid={ dataTestId }
          type="button"
          onClick={ this.increment }
        >
          +
        </button>
      </Link>
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
