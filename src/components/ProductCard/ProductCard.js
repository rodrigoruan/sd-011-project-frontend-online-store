import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, id, handleAddToShopCart,available_quantity } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/details/${id}`,
            state: {
              title,
              price,
              thumbnail,
              id,
              available_quantity
            },
          } }
        >
          { title }
        </Link>
        <img src={ thumbnail } alt={ title } />
        { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        <button
          type="button"
          id={ title }
          className={ thumbnail }
          name={ price }
          onClick={ () => handleAddToShopCart(id, title, thumbnail, price) }
          data-testid="product-add-to-cart"
        >
          
          Comprar
        </button>
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
