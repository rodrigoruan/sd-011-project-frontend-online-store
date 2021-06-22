import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    // Funções: addToCart, selectedProduct
    // Objetos: product, title, thumbnail, price, id
    const { addToCart, product, selectedProduct } = this.props;
    const { title, thumbnail, price, id,
      shipping: { free_shipping: freeShipping } } = product;

    return (
      <div
        data-testid="product"
        key={ id }
      >
        <h3>{ title }</h3>
        <img src={ thumbnail } alt="Product Thumbnail" />
        { freeShipping === true
          ? <span data-testid="free-shipping">Frete grátis</span> : '' }
        <span>
          R$
          { price }
        </span>
        <Link
          onClick={ () => selectedProduct(product) }
          data-testid="product-detail-link"
          to={ `/product-details/${id}` }
        >
          Ver Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  selectedProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};
