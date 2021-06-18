import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    localStorage.setItem('product', JSON.stringify(product));
    console.log(JSON.parse(localStorage.getItem('product')));
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ this.addToCart }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}
