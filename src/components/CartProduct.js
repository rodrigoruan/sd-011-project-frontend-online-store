import React, { Component } from 'react';

export default class CartProduct extends Component {
  render() {
    const { id, thumbnail, title, price } = this.props.productData;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img height="150px" src={thumbnail} />
        <span>{price}</span>
        <div data-testid="shopping-cart-product-quantity">1</div>
        <button>-</button>
        <button>+</button>
        <div>
          <span>SOMA</span>
        </div>
        <hr />
      </div>
    );
  }
}
