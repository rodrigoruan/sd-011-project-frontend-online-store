import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCart from './ButtonCart';

class CardCart extends Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('products'));
    return (
      <ul data-testid="shopping-cart-product-name">
        {cartProducts.map((cartProduct) => (
          <li key={ cartProduct.id }>
            <p>{ cartProduct.title }</p>
            <p>{ cartProduct.price }</p>
            <img src={ cartProduct.thumbnail } alt={ cartProduct.title } />
            <div>
              <ButtonCart />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

CardCart.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
}.isRequired;

export default CardCart;
