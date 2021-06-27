import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';
import freeship from '../images/freeship.svg';

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
        <img src={ thumbnail } alt={ title } style={ { width: '150px' } } className="product-img" />
        <div className="price-ship">
          <p className="price">{`R$ ${price}`}</p>
          { freeShipping ? <img src={ freeship } data-testid="free-shipping" className="ship" alt="Frete Grátis" /> : undefined}
        </div>
        <h4 data-testid="product-detail-name" className>{title}</h4>

        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { product },
          } }
          data-testid="product-detail-link"
          className="viewdetails"
        >
          <p>Ver Detalhes</p>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addCart(product) }
          value={ id }
          className="addcart"
        >
          <p className="add">Adicionar ao Carrinho</p>
          <p className="quantity">{`Quantidade disponível: ${quantity}`}</p>
        </button>
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
