import React, { Component } from 'react';
import ButtonCart from './ButtonCart';

class ProductCart extends Component {
  render() {
    return (
      <div>
        <img data-testid="product" src={ thumbnail } alt="product" />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h4>{ price }</h4>
        <ul>
          <li>{ condition }</li>
        </ul>
        <ButtonCart />
      </div>
    );
  }
}

export default ProductCart;
