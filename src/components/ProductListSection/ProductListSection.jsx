import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductListSection extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <span>{price}</span>
        <button type="button">Adicionar ao carrinho</button>
        <button type="button">Detalhes</button>
      </div>
    );
  }
}

ProductListSection.propTypes = {
  products: PropTypes.shape(),
}.isRequired;
