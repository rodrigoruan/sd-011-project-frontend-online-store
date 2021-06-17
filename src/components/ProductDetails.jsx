import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { product, addCart } } } = this.props;
    return (
      <>
        <div data-testid="product">
          <h4 data-testid="product-detail-name">{product.title}</h4>
          <p>{`R$ ${product.price}`}</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>Detalhes Técnicos</p>
        </div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ addCart }
          value={ product.id }
        >
          Adicionar ao ao carrinho
        </button>
      </>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      addCart: PropTypes.func.isRequired,
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        thumbnail: PropTypes.string,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};
