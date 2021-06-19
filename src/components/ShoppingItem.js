import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as storage from '../services/storage';

class ShoppingItem extends Component {
  constructor(props) {
    super(props);
    const { quantity, productCart: { price } } = this.props;
    this.state = {
      counter: quantity,
      totalPrice: quantity * price,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const { productCart, forceAppUpdate } = this.props;
    const { price, available_quantity: availableQuantity } = productCart;
    const { counter } = this.state;
    if (counter < availableQuantity) {
      const totalPrice = ((counter + 1) * price).toFixed(2);
      this.setState({
        counter: counter + 1,
        totalPrice,
      });
      storage.saveProduct(productCart, 1);
      forceAppUpdate();
    }
  }

  decrease() {
    const { counter } = this.state;
    const { productCart, forceAppUpdate } = this.props;
    const amount = -1;
    if (counter > 1) {
      const { price } = productCart;
      const totalPrice = ((counter - 1) * price).toFixed(2);
      this.setState({
        counter: counter - 1,
        totalPrice,
      });
      storage.saveProduct(productCart, amount);
      forceAppUpdate();
    }
  }

  render() {
    const { counter, totalPrice } = this.state;
    const { onClick, productCart: { id, title, price, thumbnail } } = this.props;
    return (
      <div>
        <button type="button" onClick={ () => onClick(id) }>X</button>
        <img src={ thumbnail } alt={ title } width="40px" />
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decrease }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ counter }</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increase }
        >
          +
        </button>
        <span>
          Valor unitário R$
          { price }
        </span>
        <span>
          Valor total R$
          { totalPrice }
        </span>
      </div>
    );
  }
}

export default ShoppingItem;

ShoppingItem.propTypes = ({
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}).isRequired;
