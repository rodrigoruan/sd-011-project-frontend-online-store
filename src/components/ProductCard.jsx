import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddCarrinho } from './index'

class ProductCard extends Component {
  render() {
    const { title, imgPath, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ imgPath } alt={ title } />
        <p>{ `R$ ${ price }` }</p>
        <AddCarrinho title={ title } price={ price } />
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
