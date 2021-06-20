import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    // Funções: addToCart, setCategory, selectedProduct
    // Objetos: products
    const { addToCart, products, selectedProduct } = this.props;

    return (
      <div className="product-list">
        {
          products.map((product, index) => (
            <ProductCard
              key={ index }
              addToCart={ addToCart }
              product={ product }
              selectedProduct={ selectedProduct }
            />
          ))
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  selectedProduct: PropTypes.func.isRequired,
  products: PropTypes.objectOf.isRequired,
};
