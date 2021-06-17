import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price, id } = product;

    return (
      <Link
        to={ {
          pathname: `/product/${id}`,
          state: { product },
        } }
        data-testid="product-detail-link"
      >
        <li
          data-testid="product"
          className="product-card"
        >
          <h1>{ title }</h1>
          <picture>
            <img src={ thumbnail } alt={ title } />
          </picture>
          <h2>{ price }</h2>
        </li>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};
