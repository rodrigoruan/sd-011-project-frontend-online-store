import React, { Component } from 'react';

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
    const { title, price, thumbnail } = this.props;
    localStorage.setItem(`item ${title}`, [`${title} - R$${price}`, `${thumbnail}`]);
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
