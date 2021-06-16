import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    const { id, title, thumbnail, price } = products;

    return (
      <Link
        to={ { pathname: `/product/${id}`, state: products } }
        product={ products }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h4>{ title }</h4>
          <img src={ thumbnail } alt={ `Foto do produto ${title}` } />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.string,
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
