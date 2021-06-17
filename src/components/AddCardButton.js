import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCartBtn extends Component {
  render() {
    const { addCartFunc, product } = this.props;
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addCartFunc(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

AddToCartBtn.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCartFunc: PropTypes.func.isRequired,
};
