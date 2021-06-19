import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductListSection.module.css';

export default class ProductListSection extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product" className={ styles.product }>
        <img src={ thumbnail } alt={ title } className={ styles.productImage } />
        <h3>{title}</h3>
        <span>{`R$ ${price}`}</span>
        <button className={ styles.cartBtn } type="button">Adicionar ao carrinho</button>
        <button className={ styles.detailsBtn } type="button">Detalhes</button>
      </div>
    );
  }
}

ProductListSection.propTypes = {
  products: PropTypes.shape(),
}.isRequired;
