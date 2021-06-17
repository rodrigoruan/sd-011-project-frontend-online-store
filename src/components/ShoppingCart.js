import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class ShoppingCart extends Component {
  sumtotal = () => {
    const { location } = this.props;
    const { state } = location;

    const total = [];
    state.map((item) => total.push(item.price));

    // const { price } = state[0];
    // const prices = [...price];
    // return prices;
  }

  subClick = (index, id) => {
    const getLocal = JSON.parse(localStorage.getItem('item'));
    if (getLocal[`${index}`].countP > 1) {
      getLocal[`${index}`].countP -= 1;
      localStorage.setItem('item', JSON.stringify([...getLocal]));
    } else {
      const deleteItem = getLocal.filter((value) => value.id !== id);
      localStorage.setItem('item', JSON.stringify([...deleteItem]));
    }
  }

  addClick = (index) => {
    const getLocal = JSON.parse(localStorage.getItem('item'));
    if (getLocal[`${index}`].countP < (getLocal[`${index}`].available_quantity)) {
      getLocal[`${index}`].countP += 1;
    }
    localStorage.setItem('item', JSON.stringify([...getLocal]));
  }

  render() {
    const getLocal = JSON.parse(localStorage.getItem('item'));
    return (
      <div>
        { !localStorage.item
          ? <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
          : (getLocal.map(({ title, thumbnail, price, countP, id }, index) => (
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
                id={ id }
                index={ index }
              />
            </div>
          ))) }
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
