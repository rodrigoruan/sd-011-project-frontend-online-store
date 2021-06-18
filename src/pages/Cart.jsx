import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '../components';

class Cart extends React.Component {
  getTotalPrice() {
    const { shoppingCart } = this.props;
    if (shoppingCart.itemList.length) {
      return shoppingCart.itemList.reduce((acc, current) => {
        acc += (current.price * current.quantity);
        return acc;
      }, 0).toFixed(2);
    }
    return 0;
  }

  render() {
    const { shoppingCart, removeItemFromCart, updateQuantity } = this.props;
    const { itemList } = shoppingCart;

    return (
      <main>
        <h1>Carrinho de Compras</h1>
        {!itemList.length
          ? (
            <div data-testid="shopping-cart-empty-message">
              <p>Seu carrinho está vazio</p>
            </div>
          )
          : (
            <ul>
              {itemList.map(((product) => (<CartItem
                updateQuantity={ updateQuantity }
                removeItemFromCart={ removeItemFromCart }
                key={ product.id }
                product={ product }
              />)
              ))}
            </ul>
          )}
        <h2>
          VALOR TOTAL : R$
          { this.getTotalPrice() }
        </h2>
      </main>
    );
  }
}

Cart.propTypes = {
  shoppingCart: PropTypes.shape({
    totalItemCount: PropTypes.number,
    itemList: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      quantity: PropTypes.number,
    })),
  }),
}.isRequired;

export default Cart;
