import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { price, title, id, thumbnail } = this.props;
    return (
      <li data-testid="product">
        <h4>{title}</h4>
        <img alt="imagem do produto" src={ thumbnail } />
        <p>{ `R$ ${price}` }</p>
        <Link to={ `/product/${id}` }>
          Ver Detalhes
        </Link>
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
