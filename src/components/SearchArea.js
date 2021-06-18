import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

class SearchArea extends Component {
  render() {
    const { products, createCart } = this.props;
    return (
      <div>
        { products.map((product, index) => (
          <Products
            key={ index }
            title={ product.title }
            price={ product.price }
            img={ product.thumbnail }
            product={ product }
            func={ createCart }
            products={ products }
          />
        ))}
      </div>
    );
  }
}

SearchArea.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  createCart: PropTypes.func.isRequired,
};

export default SearchArea;
