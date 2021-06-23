import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EvaluationForm from '../components/EvaluationForm';

export default class ProductDetailsPage extends Component {
  render() {
    // Funções: addToCart, getCartSize
    // Objetos: selectedProduct, title, thumbnail, price, id
    const { addToCart, selectedProduct, getCartSize } = this.props;
    const {
      title,
      thumbnail,
      price,
      id,
      shipping: { free_shipping: freeShipping },
    } = selectedProduct;
    const shoppingCartSize = getCartSize();

    return (
      <div>
        <Link to="/" className="home-button">Voltar</Link>

        <div className="cart-wrapper">
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            Carrinho de Compras
          </Link>
          <span
            data-testid="shopping-cart-size"
          >
            { 2 * shoppingCartSize }
          </span>
        </div>

        <h3 data-testid="product-detail-name">{title}</h3>

        <img src={ thumbnail } alt="Product Thumbnail" />

        <span>
          R$
          {price}
        </span>

        {freeShipping === true ? (
          <span data-testid="free-shipping">Frete grátis</span>
        ) : (
          ''
        )}

        <p>
          id:
          {id}
        </p>

        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(selectedProduct) }
        >
          Adicionar ao Carrinho
        </button>

        <EvaluationForm />

      </div>
    );
  }
}

ProductDetailsPage.propTypes = {
  addToCart: PropTypes.func.isRequired,
  getCartSize: PropTypes.func.isRequired,
  selectedProduct: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};
