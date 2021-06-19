import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingItem from '../components/ShoppingItem';
import * as storage from '../services/storage';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      productsCart: '',
    };
    this.updateState = this.updateState.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const productsCart = storage.retrieveCart();
    this.setState({ productsCart });
  }

  removeItem(id) {
    const { productsCart } = this.state;
    const { forceAppUpdate } = this.props;
    delete productsCart[id];
    this.setState({ productsCart });
    localStorage.setItem('shoppingCart', JSON.stringify(productsCart));
    forceAppUpdate();
  }

  totalPriceCart() {
    const productsCart = storage.retrieveCart(); // pode-se refatorar
    if (productsCart) {
      const total = Object.values(productsCart)
        .reduce((acc, { details, quantity }) => acc + (details.price * quantity), 0);
      return total.toFixed(2);
    }
    return 0;
  }

  render() {
    const { productsCart } = this.state;
    const { forceAppUpdate } = this.props;
    return (
      <div>
        <p>ShoppingCart</p>
        {!productsCart ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (Object.values(productsCart).map(({ details, quantity }) => (<ShoppingItem
          key={ details.id }
          productCart={ details }
          quantity={ quantity }
          onClick={ this.removeItem }
          forceAppUpdate={ forceAppUpdate }
        />))
        )}
        <p>{ this.totalPriceCart() }</p>
        <Link to="/">Voltar</Link>
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;

ShoppingCart.propTypes = {
  forceAppUpdate: PropTypes.func,
  onClick: PropTypes.func,
  productCart: PropTypes.objectOf(PropTypes.object),
}.isRequired;
