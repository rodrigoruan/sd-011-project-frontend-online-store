import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/ProductCard.css';

class ProductCard extends Component {
  constructor() {
    super();
    this.renderSpan = this.renderSpan.bind(this);
  }

  renderSpan(hasFreeShipping) {
    if (hasFreeShipping) {
      return (
        <span data-testid="free-shipping">Frete Grátis</span>
      );
    }
    return (null);
  }

  render() {
    const { title, price, thumbnail, id, addToCart, hasFreeShipping } = this.props;
    return (
      <li>
        <div className="product-card" data-testid="product">
          <Link
            data-testid="product-detail-link"
            to={ {
              pathname: '/productdetail',
              state: ({
                title,
                price,
                thumbnail,
                id,
                hasFreeShipping,
              }),
            } }
          >
            <h4>{title}</h4>
            <img alt="foto do produto" src={ thumbnail } />
            <p>{ `R$ ${price}` }</p>
            { this.renderSpan(hasFreeShipping)}
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ addToCart }
            value={ JSON.stringify({ title, price, thumbnail, quantity: 1 }) }
          >
            Adicionar
          </button>
        </div>
      </li>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ProductCard;
