import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

class ProductList extends Component {
  render() {
    const { productsList, addCartItem } = this.props;
    return (
      <ul className="listProducts">
        {productsList.map((product) => (
          <ItemCard
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            id={ product.id }
            product={ product }
            addCartItem={ addCartItem }
          />
        ))}
      </ul>
    );
  }
}

ProductList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
  addCartItem: PropTypes.func,
}.isRequired;

export default ProductList;
