import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import './index.css';

export default class ProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="productsDiv">
        {products.map((product) => <CardItem product={ product } key={ product.id } />)}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
