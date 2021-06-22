import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import handleCart from '../services/localStorage';
import '../styles/Product.css';

export default class Product extends Component {
  addQuantity(product) {
    const { callback } = this.props;
    const quantityProduct = { quantity: 1 };
    const obj = Object.assign(quantityProduct, product);
    handleCart(obj);
    callback();
  }

  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail, shipping } = product;
    const { free_shipping: freeShipping } = shipping;

    return (
      <div className="product" data-testid="product">
        <div className="product-title">
          <h5>{ title }</h5>
        </div>
        <div className="product-image">
          <img
            src={ thumbnail }
            alt={ title }
          />
        </div>
        <div className="product-price-shipping">
          <span>
            R$
            { price }
          </span>
          {
            freeShipping
              ? <span data-testid="free-shipping">Frete Grátis</span>
              : null
          }
        </div>
        <div className="product-buttons">
          <Link
            data-testid="product-detail-link"
            className="btn btn-primary"
            to={ {
              pathname: `/Details/${id}`,
              state: {
                element: product },
            } }
          >
            Detalhes
          </Link>
          <button
            id={ id }
            type="button"
            onClick={ () => this.addQuantity(product) }
            data-testid="product-add-to-cart"
            className="btn btn-success"
          >
            Adicionar ao Carrinho
          </button>
        </div>
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,

  callback: PropTypes.func.isRequired,
};
