import React from 'react';
import * as Api from '../services/api';

class ProductCard extends React.Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{title}</p>
        <img src={ thumbnail } alt="imagem produto" />
        <p>{price}</p>
      </div>
    );
  }
}

export default ProductCard;
