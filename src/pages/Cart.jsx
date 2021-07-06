import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CartItem, EmptyCart, Header } from '../components';

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
    const {
      shoppingCart,
      removeItemFromCart,
      updateQuantity,
      getTotalPrice } = this.props;

    const { itemList } = shoppingCart;
    const totalPrice = getTotalPrice();

    return (
      <>
        <Header />
        <main>
          <h1>Carrinho de Compras</h1>
          {itemList.length
            ? (
              <ul>
                {itemList.map(((product) => (<CartItem
                  updateQuantity={ updateQuantity }
                  removeItemFromCart={ removeItemFromCart }
                  key={ product.id }
                  product={ product }
                />)
                ))}
              </ul>
            )
            : (
              <EmptyCart />
            ) }
          <h2>
            VALOR TOTAL : R$
            { totalPrice }
          </h2>
          <Link to="/checkout" data-testid="checkout-products">
            Comprar agora
          </Link>
        </main>
      </>
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
