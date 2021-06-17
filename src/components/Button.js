import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      thumbnail: '',
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { title, price, id, thumbnail, updateCartItem } = this.props;
    localStorage.setItem(`${id}`, [`${title} - R$${price}`, `${thumbnail}`]);
    updateCartItem();
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

// Button.propTypes = {
//   title: PropTypes.string,
//   thumbnail: PropTypes.string,
//   price: PropTypes.number,
// };

// Button.defaultProps = {
//   title: '',
//   thumbnail: '',
//   price: 0,
// };
