import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product: { title, price, thumbnail, attributes, id } } = this.props;
    return (
      <div data-testid="product">
        <h4 data-testid="product-detail-name">{title}</h4>
        <p>{`R$ ${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        <Link
          to={ `/details/${id}` }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
        <p>{attributes.name}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    attributes: PropTypes.string,
  }).isRequired,
};
