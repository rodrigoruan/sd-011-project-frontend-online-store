import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { addToCart, product } = this.props;
    const { id, thumbnail, title, price,
      shipping: { free_shipping: freeShipping } } = product;
    return (
      <div key={ id }>
        <Link
          className="product"
          to={ `/product/${id}` }
          key={ id }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <img src={ thumbnail } alt="foto-produto" />
            <h2>{title}</h2>
            <p>{price}</p>
            {
              freeShipping
                && <span data-testid="free-shipping">Frete Grátis</span>
            }
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          id={ id }
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
