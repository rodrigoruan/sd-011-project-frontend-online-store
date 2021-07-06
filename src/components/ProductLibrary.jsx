import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductLibrary extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <div className="product-list-container">
        {productsList.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
        />))}
      </div>
    );
  }
}

export default ProductLibrary;

ProductLibrary.propTypes = ({
  productsList: PropTypes.arrayOf({}),
  map: PropTypes.func,
}).isRequired;
