import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  addToCart({ target: { value } }) {
    const key = JSON.parse(value).title;
    localStorage.setItem(key, value);
  }

  render() {
    const { price, title, id, thumbnail } = this.props;
    return (
      <li data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/productdetail',
            state: ({
              title,
              price,
              thumbnail,
              id,
            }),
          } }
        >
          <h4>{title}</h4>
          <img alt="imagem do produto" src={ thumbnail } />
          <p>{ `R$ ${price}` }</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
          value={ JSON.stringify({ title, price, thumbnail }) }
        >
          Adicionar
        </button>
      </li>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ItemCard;
