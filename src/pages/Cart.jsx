import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    const { getCart } = this.props;
    const items = getCart();
    return (
      <div>
        <Link to="/">Voltar</Link>
        {
          items.length === 0
            ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
            : (
              items.map(({ title, price, thumbnail }) => (
                <div key={ title }>
                  <p data-testid="shopping-cart-product-name">{ title }</p>
                  <img src={ thumbnail } alt="" />
                  <p>{ price }</p>
                  <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
                </div>
              ))
            )
        }
      </div>
    );
  }
}

Cart.propTypes = {
  getCart: PropTypes.func,
}.isRequired;
