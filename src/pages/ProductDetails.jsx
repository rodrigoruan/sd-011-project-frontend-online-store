import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Evaluation from '../components/Evaluation';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { product } } } = this.props;
    this.state = {
      product,
    };
  }

  render() {
    const { product } = this.state;
    const { addItemToCart, totalItemQty } = this.props;

    return (
      <section>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img
            className="shopping-cart-img"
            src="../images/shopping-basket.jpg"
            alt="Ícone de carrinho de compras"
          />
          <span data-testid="shopping-cart-size">{totalItemQty}</span>
        </Link>
        <h1 data-testid="product-detail-name">{ product.title }</h1>
        <p>{ product.price }</p>
        <p>
          { !product.shipping.free_shipping
            ? <h3>Frete Grátis</h3>
            : <h3>Calcule o Frete</h3> }
        </p>
        <img src={ product.thumbnail } alt="imagem do produto" />
        <h2>Específicações Técnicas</h2>
        <button
          type="button"
          onClick={ addItemToCart }
          data-id={ product.id }
          data-title={ product.title }
          data-price={ product.price }
          data-thumbnail={ product.thumbnail }
          data-available-quantity={ product.available_quantity }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <Evaluation />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
  totalItemQty: PropTypes.number.isRequired,
};

export default ProductDetails;
