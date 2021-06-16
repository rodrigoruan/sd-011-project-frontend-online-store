import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { products } = this.props
    const { id, thumbnail, title, price } = products;
    return (
      <Link
      to={ { pathname: `/ProductDetails/${id}`, state: products } }
      data-testid="product-detail-link"
    >      <div data-testid="product">
        { title }
        <img src={ thumbnail } alt={ title } />
        { price }
      </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
