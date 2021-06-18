import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CartItem, EmptyCart } from '../components';

class Cart extends React.Component {
  render() {
    const { removeItemFromCart, updateQuantity, getTotalPrice, productList } = this.props;
    const totalPrice = getTotalPrice();
    return (
      <main>
        <h1>Carrinho de Compras</h1>
        {!productList.length
          ? (
            <EmptyCart />
          )
          : (
            <ul>
              {productList.map(((product) => (<CartItem
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
          { totalPrice }
        </h2>
        <Link to="/checkout">
          Comprar agora
        </Link>
      </main>
    );
  }
}

Cart.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.number,
  })),
}.isRequired;

export default Cart;
