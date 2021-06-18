import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarrinhoCompras extends Component {
  render() {
    const { cartItems } = this.props;
    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    return (
      <div>
        { cartItems.lenght === 0 ? emptyCart : cartItems.map((item, index) => (
          <div className="cartProduct" key={ index }>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <img src={ item.thumbnail } alt="produto" />
            <p>
              {'R$'}
              { item.price.toFixed(2) * item.cartCount }
            </p>
            <p data-testid="shopping-cart-product-quantity">
              { item.cartCount }
            </p>
          </div>
        ))}
      </div>
    );
  }
}

CarrinhoCompras.propTypes = {
  cartItems: PropTypes.arrayOf(Object).isRequired,
};

export default CarrinhoCompras;
