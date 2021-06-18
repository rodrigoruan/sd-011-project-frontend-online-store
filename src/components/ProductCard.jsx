import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import AddToCartButton from './AddToCartButton';

export default class ProductCard extends React.Component {
  render() {
    const { addItemToCart, product } = this.props;
    const { thumbnail, title, price, id } = product;

    return (
      <li data-testid="product" className="product-card">
        <Link
          to={ {
            pathname: `/product/${id}`,
            state: { product },
          } }
          data-testid="product-detail-link"
        >
          <h1>{title}</h1>
          <picture>
            <img src={ thumbnail } alt={ title } />
          </picture>
          <h2>{ price }</h2>
        </Link>
        <AddToCartButton
          product={ product }
          addItemToCart={ addItemToCart }
          testid="product-add-to-cart"
        />
      </li>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  addItemToCart: PropTypes.func,
}.isRequired;
