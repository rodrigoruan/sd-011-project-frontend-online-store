import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import AddToCartButton from './AddToCartButton';

import freeShippingSvg from '../freeShippingSvg';

export default class ProductCard extends React.Component {
  render() {
    const { addItemToCart, product } = this.props;
    const {
      thumbnail,
      title,
      price,
      id,
      shipping,
    } = product;

    const MAX_TITLE_LENGTH = 64;
    const CONTINUATION_CUTOFF = 4;
    const TITLE_CUTOFF = MAX_TITLE_LENGTH - CONTINUATION_CUTOFF;

    return (
      <li data-testid="product" className="productCard">
        <Link
          to={ {
            pathname: `/product/${id}`,
            state: { product },
          } }
          data-testid="product-detail-link"
          className="flex flex-col justify-between flex-grow text-center"
        >
          <h1>
            {title.length <= MAX_TITLE_LENGTH
              ? title
              : `${title.slice(0, TITLE_CUTOFF)} ...`}
          </h1>
          <img
            className="w-36 h-36 object-cover self-center rounded"
            src={ thumbnail }
            alt={ title }
          />
          <div className="relative">
            <h2 className="text-lg font-bold">{`R$ ${price.toFixed(2)} `}</h2>
            { shipping.free_shipping && freeShippingSvg }
          </div>
        </Link>
        <AddToCartButton
          product={ product }
          addItemToCart={ addItemToCart }
          testid="product-add-to-cart"
          callToAction="+ Sacola"
          size="small"
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
