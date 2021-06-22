import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAddCircle } from 'react-icons/io';
import { AiFillMinusCircle } from 'react-icons/ai';
import ProductCard from '../components/ProductCard';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    const { location: { state: { shoppingCart } } } = this.props;

    this.state = {
      cart: [...shoppingCart],
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease({ currentTarget }) {
    const { cart } = this.state;
    const { name } = currentTarget;
    cart.forEach((item) => {
      if (item.id === name) {
        this.setState({ cart: [...cart, item] });
      }
    });
  }

  handleDecrease({ currentTarget }) {
    const { cart } = this.state;
    const { name } = currentTarget;
    let lastIndex = 0;
    for (let index = 0; index < cart.length; index += 1) {
      if (cart[index].id === name) {
        lastIndex = index;
      }
    }
    const filteredCart = cart.reduce((acc, item, position) => (position === lastIndex
      ? acc
      : acc.concat(item)), []);
    this.setState({ cart: filteredCart });
  }

  render() {
    const { cart } = this.state;
    return (
      <div className="cart-products-container">
        {cart.length < 1
          ? <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
          : cart.map((product, index) => (
            <div key={ index }>
              <ProductCard
                className="cart-product-card"
                item={ product }
                addProductToShoppingCartStateProps={ this.addProductToShoppingCartState }
              />
              <button
                name={ product.id }
                onClick={ this.handleDecrease }
                type="button"
                data-testid="product-decrease-quantity"
              >
                <AiFillMinusCircle />
              </button>
              <span data-testid="shopping-cart-product-quantity">
                {cart.filter((item) => item === product).length}
              </span>
              <button
                name={ product.id }
                onClick={ this.handleIncrease }
                type="button"
                data-testid="product-increase-quantity"
              >
                <IoMdAddCircle />
              </button>
              <button type="button">X</button>
            </div>))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shoppingCart: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ShoppingCart;
