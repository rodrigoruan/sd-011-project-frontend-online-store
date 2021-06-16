import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductSearch extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.length === 0
          ? 'Nenhum produto foi encontrado'
          : products.map((product) => (
            <ProductCard
              key={ product.title }
              products={ product }
            />
          ))}
      </div>
    );
  }
}

ProductSearch.propTypes = {
  products: PropTypes.array,
}.isRequired;

ProductSearch.defaultProps = {
  products: [],
};

export default ProductSearch;
