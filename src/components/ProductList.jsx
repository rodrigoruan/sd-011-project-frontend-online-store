import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';
import 'bulma/css/bulma.min.css';

class ProductList extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <ul className="productList">
        {productsList.map(
          ({ title, thumbnail, price, id, shipping, available_quantity: inStorage }) => (
            <ProductCard
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              id={ id }
              inStorage={ inStorage }
              hasFreeShipping={ shipping.free_shipping }
            />
          ),
        )}
      </ul>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
