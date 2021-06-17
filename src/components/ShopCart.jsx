import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShopCart extends Component {
  render() {
    const { location: { state } } = this.props;
    if (state.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>);
    }
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${state.length}`}
        </p>
        { state.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <p>{ item.id }</p>
            <p>{ item.price }</p>
            <img src={ item.thumbail } alt={ item.id } />
          </div>))}
      </div>
    );
  }
}

ShopCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      map: PropTypes.func,
    }),
  }).isRequired,
};
