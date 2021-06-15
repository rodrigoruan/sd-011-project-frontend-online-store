import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class AllProducts extends Component {
  render() {
    const { productsList } = this.props;
    console.log(productsList[0]);
    if (!productsList[0]) {
      return <span>Nenhum produto foi encontrado</span>;
    }
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
