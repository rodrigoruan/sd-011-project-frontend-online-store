import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-card.css';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, id, imagePath } = product;

    return (
      <div data-testid="product" id={ id }>
        <h1>{ title }</h1>
        <img src={ imagePath } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
