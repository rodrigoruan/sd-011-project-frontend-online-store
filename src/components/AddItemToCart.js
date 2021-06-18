import React from 'react';
import PropTypes from 'prop-types';
import * as storage from '../services/storage';

export default class AddItemToCart extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => storage.saveProduct(product, 1) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddItemToCart.propTypes = {
  product: PropTypes.shape({
    productInfo: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
