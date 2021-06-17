import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  componentDidUpdate() {
    this.setLocation();
  }

  setLocation = () => {
    const { location } = this.props;
    const { state } = location;
    console.log(state);
    if (state.length > 1) {
      localStorage.setItem('item', JSON.stringify(state));
      window.location.reload();
    }
  }

  sumtotal = () => {
    const { location } = this.props;
    const { state } = location;

    const total = [];
    state.map((item) => total.push(item.price));

    // const { price } = state[0];
    // const prices = [...price];
    // return prices;
  }

  subClick = (quantity) => {
    if (quantity > 0) {
      quantity += 1;
    }
  }

  addClick = (quantity) => {
    console.log(quantity);
    this.setState((cartStatus2) => ({
      quantity: cartStatus2.quantity + 1,
    }));
  }

  render() {
    const getLocal = JSON.parse(localStorage.getItem('item'));

    console.log(getLocal);
    return (
      <>
        <div>
          { !localStorage.item
            ? <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
            : (getLocal.map(({ title, thumbnail, price, countP }, index) => (
              <div key={ index }>
                <div data-testid="shopping-cart-product-name">
                  <img src={ thumbnail } alt={ title } />
                  <p>{ title }</p>
                  <p>
                    R$
                    {price}
                  </p>
                </div>
                <Button
                  quantity={ countP }
                  subClick={ this.subClick }
                  addClick={ this.addClick }
                />
              </div>
            ))) }
        </div>
        {/* <div className="cart_item">
          <ol>
            <img src={ thumbnail } alt={ title } />
            <p>{ title }</p>
            <p>{ `R$${price}`}</p>
            <span>{this.sumtotal()}</span>
          </ol>
        </div> */}
      </>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
