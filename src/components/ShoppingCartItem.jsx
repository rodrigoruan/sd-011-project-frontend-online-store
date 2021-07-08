import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartItem extends React.Component {
  render() {
    const { id, title, price, qty, thumbnail, updateItemQtyInCart } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{qty}</p>
        <button
          type="button"
          onClick={ updateItemQtyInCart }
          operation="+"
          data-id={ id }
          data-testid="product-increase-quantity"
        >
          +1
        </button>
        <button
          type="button"
          onClick={ updateItemQtyInCart }
          operation="-"
          data-id={ id }
          data-testid="product-decrease-quantity"
        >
          -1
        </button>
        <img src={ thumbnail } alt="imagem do produto" />
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  qty: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ShoppingCartItem;
