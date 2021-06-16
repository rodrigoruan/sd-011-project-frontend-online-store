import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/ProductCard.css';

class ProductCard extends Component {
  addToCart({ target: { value } }) {
    const key = JSON.parse(value).title;
    localStorage.setItem(key, value);
  }

  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <li className="product-card" data-testid="product">
        <h4>{title}</h4>
        <img alt="foto do produto" src={ thumbnail } />
        <p>{ `R$ ${price}` }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
          value={ JSON.stringify({ title, price, thumbnail }) }
        >
          Adicionar
        </button>
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
