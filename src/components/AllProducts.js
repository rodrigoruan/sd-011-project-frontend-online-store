import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class AllProducts extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <div>
        {productsList.map((product) => (
          <CardProduct product={ product } key={ product.id } />))}
      </div>
    );
  }
}

AllProducts.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default AllProducts;
