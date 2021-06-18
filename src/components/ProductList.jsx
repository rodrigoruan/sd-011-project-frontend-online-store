import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

import '../styles/ProductList.css';

class ProductList extends Component {
  render() {
    const { productsList, addToCart } = this.props;
    return (
      <ul className="productList">
        {productsList.map(
          ({ title, thumbnail, price, id, available_quantity: inStorage }) => (
            <ProductCard
              key={ id }
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              inStorage={ inStorage }
              addToCart={ addToCart }
            />
          ),
        )}
      </ul>
    );
  }
}

ProductList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ProductList;
