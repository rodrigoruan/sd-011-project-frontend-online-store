import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuantityButton from './QuantityButton';
import style from './CardCart.module.css';

class CardCart extends Component {
  render() {
    const { products } = this.props;
    return (
      <ul className={ style.productsList }>
        {products.map((cartProduct) => (
          <li key={ cartProduct.id }>
            <h1 data-testid="shopping-cart-product-name">{ cartProduct.title }</h1>
            <img src={ cartProduct.thumbnail } alt={ cartProduct.title } />
            <p>{ cartProduct.price }</p>
            <QuantityButton product={ cartProduct } />
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
