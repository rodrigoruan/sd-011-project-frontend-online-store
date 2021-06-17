import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-card.css';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, id, thumbnail } = product;

    return (
      <div data-testid="product" id={ id } key={ id }>
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
