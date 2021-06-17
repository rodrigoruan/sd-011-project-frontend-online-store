import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { itensArray } = this.props;
    if (itensArray.length) {
      return (
        <div>
          { itensArray.map(({ id, title }) => (
            <div data-testid="shopping-cart-product-name" key={ id }>
              <p>{ title }</p>
            </div>
          ))}
          <p data-testid="shopping-cart-product-quantity">{ itensArray.length }</p>
          <button type="button" data-testid="shopping-cart-button">Comprar</button>
        </div>
      );
    }
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <button type="button" data-testid="shopping-cart-button">Comprar</button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  itensArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
