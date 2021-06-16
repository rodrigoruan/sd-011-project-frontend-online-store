import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/ProductCard.css';

class ProductCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <li className="product-card" data-testid="product">
        <h4>{title}</h4>
        <img alt="foto do produto" src={ thumbnail } />
        <p>{ `R$ ${price}` }</p>
      </li>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ProductCard;
