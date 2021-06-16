import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <ul>
        {productsList.map(({ title, thumbnail, price }) => (
          <ProductCard
            key={ title }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
          />
        ))}
      </ul>
    );
  }
}

export default ProductList;
