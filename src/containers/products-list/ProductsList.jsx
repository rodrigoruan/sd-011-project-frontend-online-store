import React, { Component } from 'react';
import './products-list.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ProductCard } from '../../components/Components';

class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="products-container">
        { products
          .map((product, idx) => {
            return (
              <ProductCard id={ product.id } key={ idx } product={ product } />
            )
          }) }
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.shape(PropTypes.object).isRequired,
};

export default ProductsList;
