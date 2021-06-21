import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduct extends Component {
  render() {
    const { product, addToCartFunction } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { detail: product },
          } }
          data-testid="product-detail-link"
        >
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => addToCartFunction(product) }
          type="button"
        >
          Adiiconar ao carrinho
        </button>
      </div>
    );
  }
}

CardProduct.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
}.isRequired;

export default CardProduct;
