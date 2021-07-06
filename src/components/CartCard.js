import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartCard extends Component {
  constructor() {
    super();
    this.state = {
      realQuantity: 1,
      money: 0,
    };
    this.addQuantities = this.addQuantities.bind(this);
    this.subtractQuantities = this.subtractQuantities.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addQuantities() {
    const { price, id, title, thumbnail } = this.props;
    const localGet = localStorage.getItem(id);
    const productMoney = JSON.parse(localGet).price;
    const productquantities = JSON.parse(localGet).quantity;
    const quantity = productquantities + 1;
    const totalValues = price * (productquantities + 1);
    let { realQuantity } = this.state;
    console.log(productMoney);
    if (productquantities >= 0) {
      const obj = {
        id,
        title,
        price,
        thumbnail,
        quantity,
        totalValues,
      };
      window.localStorage
        .setItem(id, JSON.stringify(obj));
      realQuantity = productquantities;
      this.setState({ realQuantity: realQuantity + 1 });
      window.location.reload();
    }
  }

  subtractQuantities() {
    const { price, id, title, thumbnail } = this.props;
    const localGet = localStorage.getItem(id);
    const productMoney = JSON.parse(localGet).price;
    const productquantities = JSON.parse(localGet).quantity;
    const quantity = productquantities - 1;
    const totalValues = price * (productquantities - 1);
    let { realQuantity } = this.state;
    console.log(productMoney);
    if (productquantities > 1) {
      const obj = {
        id,
        title,
        price,
        thumbnail,
        quantity,
        totalValues,
      };
      window.localStorage
        .setItem(id, JSON.stringify(obj));
      realQuantity = productquantities;
      this.setState({ realQuantity: realQuantity - 1 });
      window.location.reload();
    }
  }

  removeItem() {
    const { id } = this.props;
    localStorage.removeItem(id);
    window.location.reload();
  }

  render() {
    let { realQuantity, money } = this.state;
    const { title, thumbnail, id } = this.props;
    const localGet = localStorage.getItem(id);
    const productMoney = JSON.parse(localGet).totalValues;
    const productquantities = JSON.parse(localGet).quantity;
    realQuantity = productquantities;
    money = productMoney;
    return (
      <div>
        <p id="name" data-testid="shopping-cart-product-name">
          { title }
        </p>
        <img
          src={ thumbnail }
          alt={ thumbnail }
        />

        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.subtractQuantities }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">
          {realQuantity}
        </span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.addQuantities }
        >
          +
        </button>
        <span id="number">
          R$
          {money}
        </span>
        <button className="rmv-btn" type="button" onClick={ this.removeItem }>X</button>
        <button type="button">Finalizar compra</button>
      </div>
    );
  }
}
CartCard.propTypes = {
  id: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
