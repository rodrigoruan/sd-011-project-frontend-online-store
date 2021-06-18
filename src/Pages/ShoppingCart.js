import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this); 
  }

  IncrementItem() {
    const { itensArray } = this.props;
    console.log(itensArray)
  }

  DecreaseItem() {
    const { itensArray } = this.props;
    console.log(itensArray)
  }

  render() {
    const { itensArray } = this.props;
    if (itensArray.length) {
      return (
        <div>
          { itensArray.map(({ id, title, price, quantity }) => (
            <div data-testid="shopping-cart-product-name" key={ id }>
              <p>{ title } { quantity }</p>
              <button onClick={ this.IncrementItem } data-testid="product-increase-quantity">+</button>
              <button onClick={ this.DecreaseItem } data-testid="product-decrease-quantity">-</button>
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
