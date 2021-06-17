import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

class SearchArea extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product, index) => (
          <Products
            key={ index }
            title={ product.title }
            price={ product.price }
            img={ product.thumbnail }
            id={ product.id }
          />
        ))}
      </div>
    );
  }
}

SearchArea.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default SearchArea;
