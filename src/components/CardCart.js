import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuantityButton from './QuantityButton';

class CardCart extends Component {
  render() {
    const { products } = this.props;
    return (
      <ul>
        {products.map((cartProduct) => (
          <li key={ cartProduct.id }>
            <p data-testid="shopping-cart-product-name">{ cartProduct.title }</p>
            <p>{ cartProduct.price }</p>
            <img src={ cartProduct.thumbnail } alt={ cartProduct.title } />
            <div>
              <QuantityButton product={ cartProduct } />
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
