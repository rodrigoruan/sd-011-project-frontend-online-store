import React, { Component } from 'react';

import '../styles/ProductCard.css';

class ProductCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <li className="product-card" data-testid="product">
        <h4>{title}</h4>
        <img alt="foto do produto" src={ thumbnail } />
        <p>{ `R$ ${price}` }</p>
      </li>
    );
  }
}

export default ProductCard;
