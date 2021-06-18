import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  getShoppingCartPrice() {
    const { shoppingCartList } = this.props;

    return shoppingCartList.reduce((acc, item) => acc + item.price, 0);
  }

  removeDuplicates() {
    const { shoppingCartList } = this.props;

    return [...shoppingCartList
      .reduce((map, obj) => map
        .set(obj.id, obj), new Map())
      .values()];
  }

  countItems(itemId) {
    const { shoppingCartList } = this.props;

    return shoppingCartList
      .filter(({ id }) => id === itemId)
      .reduce((acc) => acc + 1, 0);
  }

  render() {
    const { shoppingCartList } = this.props;

    if (shoppingCartList.length === 0) {
      return (
        <div>
          <Link to="/">Home</Link>

          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }

    const filteredList = this.removeDuplicates();
    const totalPrice = this.getShoppingCartPrice();

    return (
      <div>
        <Link to="/">Home</Link>

        { filteredList.map(({ id, title, price, thumbnail }) => (
          <div key={ id } className="cart-item">
            <p> X </p>
            <img src={ thumbnail } alt={ title } />
            <h4>{ title }</h4>
            <p data-testid="product-decrease-quantity"> - </p>
            <p>{ this.countItems(id) }</p>
            <p data-testid="product-increase-quantity"> + </p>
            <p>{`R$: ${price}`}</p>
          </div>
        ))}

        <p>
          Valor Total da Compra:
          <span>{ ` R$ ${totalPrice}` }</span>
        </p>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  shoppingCartList: PropTypes.arrayOf(
    PropTypes.array,
    PropTypes.object,
  ).isRequired,
};

export default ShoppingCart;
