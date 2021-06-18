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
    this.sumCounter = this.sumCounter.bind(this);
    this.minusCounter = this.minusCounter.bind(this);
  }

  sumCounter() {
    const { productCart } = this.props;
    const { price } = productCart;
    const { counter } = this.state;
    const totalPrice = Math.round((counter + 1) * price * 100) / 100;
    this.setState({
      counter: counter + 1,
      totalPrice,
    });
    storage.saveProduct(productCart, 1);
  }

  minusCounter() {
    const { counter } = this.state;
    const { productCart } = this.props;
    const amount = -1;
    if (counter > 1) {
      const { price } = productCart;
      const totalPrice = Math.round((counter - 1) * price * 100) / 100;
      this.setState({
        counter: counter - 1,
        totalPrice,
      });
    }
    storage.saveProduct(productCart, amount);
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
          onClick={ this.minusCounter }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ counter }</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.sumCounter }
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
