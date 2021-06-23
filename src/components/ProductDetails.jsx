import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Comments from './Comments';

export default class ProductDetails extends Component {
  render() {
    const { location:
      { state:
        { product,
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
          <h4 data-testid="product-detail-name">{product.title}</h4>
          <p>{`R$ ${product.price}`}</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>Detalhes Técnicos</p>

        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addCart(product) }
          value={ product.id }
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
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        thumbnail: PropTypes.string,
        id: PropTypes.string,
      }),
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
