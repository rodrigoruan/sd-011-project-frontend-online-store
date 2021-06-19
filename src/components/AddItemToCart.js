import React from 'react';
import PropTypes from 'prop-types';
import * as storage from '../services/storage';

export default class AddItemToCart extends React.Component {
  constructor() {
    super();
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick() {
    const { product, forceAppUpdate } = this.props;
    storage.saveProduct(product, 1);
    forceAppUpdate();
  }

  render() {
    const { dataTestId } = this.props;

    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ this.handleclick }
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
  }),
  dataTestId: PropTypes.string,
}.isRequired;
