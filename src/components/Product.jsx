import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import handleCart from '../services/localStorage';

export default class Product extends Component {
  addQuantity(product) {
    const quantityProduct = { quantity: 1 };
    const obj = Object.assign(quantityProduct, product);
    handleCart(obj);
  }

  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;

    return (
      <div data-testid="product">
        <span>{ id }</span>
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/Details/${id}`,
            state: {
              element: product } } }
        >
          Detalhes
        </Link>
        <button
          id={ id }
          type="button"
          onClick={ () => this.addQuantity(product) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
