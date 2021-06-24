import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCount();
  }

  getCount = () => {
    const { title } = this.props;
    if (localStorage.getItem(title)) {
      const count = JSON.parse(localStorage.getItem(title)).count + 1;
      this.setState({
        count,
      });
    }
  }

  addToCart() {
    const { title, price, thumbnail, funcGetLocalStorage } = this.props;
    this.setState((oldValue) => ({ count: oldValue.count + 1 }));
    const { count } = this.state;
    const objeto = { count, title, price, thumbnail };
    localStorage.setItem(title, JSON.stringify(objeto));
    funcGetLocalStorage();
  }

  render() {
    const { dataTestid } = this.props;

    return (
      <button
        type="button"
        data-testid={ dataTestid }
        onClick={ this.addToCart }
      >
        Adicionar ao carrinho!
      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  dataTestid: PropTypes.string.isRequired,
  funcGetLocalStorage: PropTypes.func.isRequired,
};
