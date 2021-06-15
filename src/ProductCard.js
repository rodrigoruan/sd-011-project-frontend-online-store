import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, imgPath, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ imgPath } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
