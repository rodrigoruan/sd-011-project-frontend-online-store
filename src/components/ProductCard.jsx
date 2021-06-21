import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product: { title, price, thumbnail, id, available_quantity },
      addCart } = this.props;

    return (
      <div className="product-card" data-testid="product">
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } style={ { width: '150px' } } />
        <p>{`R$ ${price}`}</p>
        <p>{`Quantidade disponível: ${available_quantity}`}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ addCart }
          value={ id }
        >
          Adicionar ao Carrinho
        </button>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { title, price, thumbnail, id },
          } }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
