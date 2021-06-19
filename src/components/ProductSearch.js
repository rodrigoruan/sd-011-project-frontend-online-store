import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductSearch extends Component {
  render() {
    const { products } = this.props;
    return (
      <ul className="cart-items">
        { products.length === 0
          ? <h4>Nenhum produto foi encontrado</h4>
          : products.map((product) => (
            <ProductCard
              key={ product.id }
              products={ product }
            />
          ))}
      </ul>
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
