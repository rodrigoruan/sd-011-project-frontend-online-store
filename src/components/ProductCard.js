import React, { Component } from 'react';

export default class ItemProduct extends Component {
  render() {
    const { thumbnail, title, price, id } = this.props.item;
    const { handleAddToCart } = this.props;
    return (
      <div data-testid="product" className="content" key={id}>
        <img src={thumbnail} alt="product thumbnail" />
        <h3>{title}</h3>
        <h6>
          R$
          {parseFloat(price, 10).toFixed(2)}
        </h6>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={() => handleAddToCart(id, title, thumbnail, price)}
          className="btn btn-success"
        >
          Add to Cart!
        </button>
      </div>
    );
  }
}
