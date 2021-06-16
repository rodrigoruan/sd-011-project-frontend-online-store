import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h4>{title}</h4>
        <p>{`R$ ${price}`}</p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
