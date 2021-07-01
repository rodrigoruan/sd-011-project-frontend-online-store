/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      id,
      shipping,
      handleAddToShopCart,
      availableQuantity,
    } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <div className="ui card card-size">
          <div>
            <img className="image-thumb" src={ thumbnail }/>
          </div>
          <div className="content">
            <div className="header">
            <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            state: {
              title,
              price,
              thumbnail,
              id,
              availableQuantity,
              shipping,
            },
          } }
        >
          {title}
        </Link>
          </div>
          <div className="meta">
            Categoria
          </div>
          <div className="description">
          { shipping ?
          <div className="free-ship">
          <i className="truck icon" data-testid="free-shipping" /> 
          <p>Frete grátis</p>
          </div>: '' }
        { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </div>
          </div>
          <div className="extra-content">
            <a>
              <i aria-hidden="true" class="shopping cart icon" />
              {availableQuantity}
            </a>
          <button
          type="button"
          id={ title }
          className="ui primary button mini ui button"
          name={ price }
          onClick={ () => handleAddToShopCart(this.props) }
          data-testid="product-add-to-cart"
          >
            Comprar
          </button>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  handleAddToShopCart: PropTypes.func,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
