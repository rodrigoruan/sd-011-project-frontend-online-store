import React, { Component } from 'react';

class NewItem extends Component {

  render() {
    const { product, cart} = this.props;
    const quantity = cart.filter((item) => {
      return item === product;
    });
    return (
      <div key={product.title}>
        <p data-testid="shopping-cart-product-name">{product.title}</p>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.price}</p>
        <span data-testid="shopping-cart-product-quantity">{quantity.length}</span>
      </div>
    );
  }
}

export default NewItem;
