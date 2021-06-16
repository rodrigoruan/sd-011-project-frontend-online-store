import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <li data-testid="product">
        <h2>{title}</h2>
        <img alt="foto do produto" src={ thumbnail } />
        <p>{ `R$ ${price},00` }</p>
      </li>
    );
  }
}

export default ProductCard;
