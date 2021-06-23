import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    const { product } = this.props;

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
        <p
          data-testid="shopping-cart-size"
        >
          {cartItems.reduce((acc, curr) => (
            (acc + (curr.quantity))), 0)}
        </p>
        <div data-testid="product">
          <h4 data-testid="product-detail-name">{title}</h4>
          <p>{`R$ ${price}`}</p>
          <img src={ thumbnail } alt={ title } />
          <p>Detalhes Técnicos</p>

        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addCart(product) }
          value={ id }
        >
          Adicionar ao carrinho
        </button>
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
  cartItems: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    reduce: PropTypes.func,
  }).isRequired,
};
