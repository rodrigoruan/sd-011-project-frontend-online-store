import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      total: 0,
    };

    this.totalValue = this.totalValue.bind(this);
    this.getSetState = this.getSetState.bind(this);
  }

  componentDidMount() {
    this.totalValue();
    this.getSetState();
  }

  getSetState() {
    const { product: { quantity } } = this.props;
    this.setState({
      quantity,
    });
  }

  increaseQuantity() {
    const { product: { id, title, thumbnail, price } } = this.props;
    const previousList = this.loadCartList();
    if (previousList[id]) {
      previousList[id].quantity += 1;
    } else {
      previousList[id] = { title, thumbnail, price, quantity: 1 };
    }
    const quantityItem = previousList[id].quantity;
    this.setState({
      quantity: quantityItem,
    });
    localStorage.setItem('cartList', JSON.stringify(previousList));
    this.totalValue();
  }

  decreaseQuantity() {
    const { product: { id } } = this.props;
    const previousList = this.loadCartList();
    if (previousList[id].quantity > 1) {
      previousList[id].quantity -= 1;
      this.setState({
        quantity: previousList[id].quantity,
      });
    } else {
      console.log('deletar o item e atualizar o carrinho');
    }

    localStorage.setItem('cartList', JSON.stringify(previousList));
    this.totalValue();
  }

  loadCartList() {
    let previousList = localStorage.getItem('cartList');

    if (previousList === null) {
      previousList = {};
      return previousList;
    }
    return JSON.parse(previousList);
  }

  totalValue() {
    const localValues = JSON.parse(localStorage.getItem('cartList'));
    let values = Object.values(localValues);

    if (values === null) {
      values = 0;
      return values;
    }
    const result = values
      .reduce(((acc, cur) => ({
        price: acc.price ? acc.price + (cur.price * cur.quantity)
          : cur.price * cur.quantity,
      })), 0);

    this.setState({
      total: result.price,
    });
  }

  render() {
    const { product } = this.props;
    const { quantity, total } = this.state;
    return (
      <div>
        <button type="button">X</button>
        <img
          className="image-details"
          alt={ `${product.title}` }
          src={ product.thumbnail }
        />
        <h4 data-testid="shopping-cart-product-name">{ product.title }</h4>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.increaseQuantity() }
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.decreaseQuantity() }
        >
          -
        </button>
        <p>
          { `Valor unitario R$ ${parseFloat(product.price)
            .toFixed(2)
            .replace('.', ',')}` }
        </p>
        <p>
          { `Total produto R$ ${parseFloat(product.price * quantity)
            .toFixed(2)
            .replace('.', ',')}` }
        </p>
        <p>{ `Total R$ ${parseFloat(total).toFixed(2).replace('.', ',')}` }</p>
      </div>
    );
  }
}

Cart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default Cart;
