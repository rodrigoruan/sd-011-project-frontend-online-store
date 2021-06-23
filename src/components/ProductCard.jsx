import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product:
      { title,
        price,
        thumbnail,
        id,
        shipping:
          { free_shipping: freeShipping } },
    addCart } = this.props;

    const { product: { available_quantity: quantity } } = this.props; // https://eslint.org/docs/rules/camelcase
    const { product } = this.props; 


    return (
      <div className="product-card" data-testid="product">
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } style={ { width: '150px' } } />
        <p>{`R$ ${price}`}</p>

        <p>{`Quantidade disponível: ${quantity}`}</p>
        { freeShipping ? <p data-testid="free-shipping">Frete grátis</p> : undefined}

        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addCart(product) }
          value={ id }
        >
          Adicionar ao Carrinho
        </button>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { product },
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};
