import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { thumbnail, title, price } = this.props;
    return (
      <div data-testid="product">
        { title }
        <img src={ thumbnail } alt={ title } />
        { price }
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
