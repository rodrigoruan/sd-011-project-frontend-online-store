import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Comments from './Comments';

export default class ProductDetails extends Component {
  render() {
    const { location:
      { state:
        { title,
          price,
          thumbnail,
          id,
        },
      }, addCart, cartItems } = this.props;

    return (
      <>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/cart',
            state: cartItems,
          } }
        >
          Voltar ao carrinho
        </Link>
        <div data-testid="product">
          <h4 data-testid="product-detail-name">{title}</h4>
          <p>{`R$ ${price}`}</p>
          <img src={ thumbnail } alt={ title } />
          <p>Detalhes Técnicos</p>

        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ addCart }
          value={ id }
        >
          Adicionar ao carrinho
        </button>
        <Comments id={ id } />
      </>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      thumbnail: PropTypes.string,
      id: PropTypes.string,
    }),
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  /* comments: PropTypes.string.isRequired, */
  cartItems: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    reduce: PropTypes.func,
  }).isRequired,
};
