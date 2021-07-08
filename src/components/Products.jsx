import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Products extends Component {
  render() {
    const { products, addItemToCart } = this.props;
    // console.log(this.props);
    return (
      <section className="products-container">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            item={ product }
            addItemToCart={ addItemToCart }
          />
        ))}
      </section>
    );
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default Products;
