import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

class ProductList extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <ul className="listProducts">
        {productsList.map(({ title, thumbnail, price, id }) => (
          <ItemCard
            key={ title }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
            id={ id }
          />
        ))}
      </ul>
    );
  }
}

ProductList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ProductList;
