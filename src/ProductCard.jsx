import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div className="product-card">
        <h4>{title}</h4>
        <img src={ image } alt="Image product" />
        <p>{price}</p>
      </div>
    );
  }
}

export default ProductCard;
