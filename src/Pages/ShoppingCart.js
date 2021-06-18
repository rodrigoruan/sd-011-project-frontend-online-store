import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);

  }

  IncrementItem(id) {
    const { itensArray, ShowQuantity } = this.props;
    itensArray.find((product) => product.id === id).quantity += 1
    ShowQuantity()
  }

  DecreaseItem(id) {
    const { itensArray, ShowQuantity } = this.props;
    const verifiedItem = itensArray.find((product) => product.id === id)
    if(verifiedItem.quantity > 0) {
      verifiedItem.quantity -= 1
    }
    ShowQuantity()
  }

  render() {
    const { itensArray, remove, actualValue } = this.props;

    if (itensArray.length) {
      return (
        <div>
          { itensArray.map(({ id, title, price, quantity }) => (
            <div data-testid="shopping-cart-product-name" key={ id }>
              <p>{ title } { quantity } { price }</p>
              <button type="button" onClick={() => this.IncrementItem(id) } data-testid="product-increase-quantity">+</button>
              <button type="button" onClick={() => this.DecreaseItem(id) } data-testid="product-decrease-quantity">-</button>
              <button type="button" onClick={() => remove(id) }>X</button>
            </div>
          ))}
          <p data-testid="shopping-cart-product-quantity">{ actualValue }</p>
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
