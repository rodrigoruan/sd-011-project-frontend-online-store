import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { item, addItemToCart } = this.props;
    return (
      <div data-testid="product">
        <h4>{ item.title }</h4>
        <img src={ item.thumbnail } alt="imagem do produto" />
        <p>{ item.price }</p>
        { !item.shipping.free_shipping
          ? <p data-testid="free-shipping">Frete Grátis</p>
          : <p>Calcule o Frete</p>}
        <Link
          to={ { pathname: `/products/${item.id}`, state: { product: item } } }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
        <button
          type="button"
          onClick={ addItemToCart }
          data-id={ item.id }
          data-title={ item.title }
          data-price={ item.price }
          data-thumbnail={ item.thumbnail }
          data-available-quantity={ item.available_quantity }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
    shipping: {
      free_shipped: PropTypes.boolean,
    }.isRequired,
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default ProductCard;
