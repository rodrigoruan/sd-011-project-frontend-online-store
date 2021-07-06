import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { product, addCartItem } = this.props;
    const { price, title, id, thumbnail } = this.props;
    return (
      <div className="item-card">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/products/${id}`,
            state: { product },
          } }
        >
          <li data-testid="product" className="product-card">
            <h4 className="product-card-title">{title}</h4>
            <img className="product-image" alt="imagem do produto" src={ thumbnail } />
            <p className="product-card-price">{`R$ ${price}`}</p>
            <p className="product-link-details">
              Ver Detalhes
            </p>
          </li>
        </Link>
        <button
          className="searchButton"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addCartItem }
          value={ JSON.stringify(product) }
        >
          Adicionar
        </button>
      </div>
    );
  }
}
ItemCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;
export default ItemCard;
