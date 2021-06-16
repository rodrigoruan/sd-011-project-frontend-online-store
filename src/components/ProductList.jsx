import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

import '../styles/ProductList.css';

class ProductList extends Component {
  render() {
    const { productsList, addToCart } = this.props;
    return (
      <ul className="productList">
        {productsList.map((product) => (
          <ProductCard
            key={ product.title }
            product={ product }
            addToCart={ addToCart }
          />
        ))}
      </ul>
    );
  }
}

ProductList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
  addToCart: PropTypes.func,
}.isRequired;

export default ProductList;
