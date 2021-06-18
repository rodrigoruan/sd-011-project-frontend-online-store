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

  addToCart() {
    const { title, price, thumbnail } = this.props;
    this.setState((oldValue) => ({ count: oldValue.count + 1 }));
    const { count } = this.state;
    const objeto = { count, title, price, thumbnail };

    localStorage.setItem(title, JSON.stringify(objeto));
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ this.addToCart }
      >
        Adicionar ao carrinho!
      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
};

Button.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
};
