import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductListCart from './ProductListCart';
import Button from './Button';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  sumtotal = () => {
    const { location } = this.props;
    const { state } = location;

    const total = [];
    state.map((item) => total.push(item.price));
    console.log(total);
    // const { price } = state[0];
    // const prices = [...price];
    // return prices;
  }

  subClick = () => {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState((cartStatus) => ({
        quantity: cartStatus.quantity - 1,
      }));
    }
  }

  addClick = () => {
    const { quantity } = this.state;
    console.log(quantity);
    this.setState((cartStatus2) => ({
      quantity: cartStatus2.quantity + 1,
    }));
  }

  render() {
    const { quantity } = this.state;
    const { location } = this.props;
    const { state } = location;
    const { title, price, thumbnail } = state;
    console.log(this.props);
    return (
      <>
        <div>
          { state.length === 0
            ? <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
            : (state.map((item) => (
              <div key={ item.title }>
                <ProductListCart
                  products={ item }
                />
                <Button
                  quantity={ quantity }
                  subClick={ this.subClick }
                  addClick={ this.addClick }
                />
              </div>
            ))) }
        </div>
        <div className="cart_item">
          <ol>
            <img src={ thumbnail } alt={ title } />
            <p>{ title }</p>
            <p>{ `R$${price}`}</p>
            <span>{this.sumtotal()}</span>
          </ol>
        </div>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};
