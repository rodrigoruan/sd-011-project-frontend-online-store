import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {\
  constructor() {
    super()
    this.state = {
      selectedProduct:{}
    }
  }
  
  addTo

  render() {
    const { product: { title, price, thumbnail, id }, product } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ { pathname: `/product-details/${id}`, state: product } }
          data-testid="product-detail-link"
        >
          <h5>{title}</h5>
          <p>{`R$ ${price}`}</p>
          <div>
            <img src={ thumbnail } alt={ title } width="70px" />
          </div>
        </Link>
        <button type="button">Adicionar ou Carrinho</button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
