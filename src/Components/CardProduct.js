import React, { Component } from 'react';

export default class CardProduct extends Component {
  render() {
    const { listProduct } = this.props;
    const { thumbnail, title, price } = listProduct;
    return (
      <div data-testid="product">
        { title }
        <img src={ thumbnail } alt={ title } />
        { price }
      </div>
    );
  }
}
