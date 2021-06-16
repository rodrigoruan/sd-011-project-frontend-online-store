import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    const { title, thumbnail, price } = products;

    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ `Foto do produto ${title}` } />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
};

ProductCard.defaultProps = {
  products: PropTypes.shape({
    title: '',
    thumbnail: '',
    price: 0,
  }),
};

export default ProductCard;
