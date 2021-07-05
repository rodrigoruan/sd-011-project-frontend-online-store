import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemShopCart from '../components/ItemShopCart';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.filterCart = this.filterCart.bind(this);
    this.state = {
      filteredCart: [],
    };
  }

  componentDidMount() {
    this.filterCart();
  }

  filterCart() {
    const { cart } = this.props;
    const filteredCart = cart.reduce((acum, curr) => (acum
      .includes(curr) ? acum : acum.concat(curr)), []);
    this.setState({ filteredCart });
  }

  render() {
    const { filteredCart } = this.state;
    const { cart, addQuantity, subQuantity, deleteProduct } = this.props;
    return filteredCart.length > 0 ? (
      <main>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <span className="shopping-cart-button">
            {' '}
            { /* */ }
            <Link data-testid="shopping-cart-button" to="/shoppingcart">
              <button
                className="material-icons white-bg"
                type="button"
              >
                shopping_cart
              </button>
            </Link>
            <span data-testid="shopping-cart-size">{cart.length}</span>
          </span>
        </Link>
        {filteredCart.map((item) => (
          <ItemShopCart
            item={ item }
            cart={ cart }
            addQuantity={ addQuantity }
            subQuantity={ subQuantity }
            deleteProduct={ deleteProduct }
            key={ item.id }
          />
        ))}
        <Link
          data-testid="checkout-products"
          to="/checkout"
        >
          <button type="button">Finalizar Compra</button>
        </Link>
      </main>
    ) : (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
