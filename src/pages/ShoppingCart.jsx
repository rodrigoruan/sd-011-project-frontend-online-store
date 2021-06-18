import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ShoppingCart extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     shoppingCart: [],
  //   };
  // }

  render() {
    const { location: { state: { shoppingCart } } } = this.props;
    console.log(shoppingCart.length);
    return (

      <div className="cart-products-container">
        {shoppingCart.length < 1
          ? <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
          : shoppingCart.map((product, index) => (
            <div key={ index }>
              <ProductCard
                className="cart-product-card"
                item={ product }
                addProductToShoppingCartStateProps={ this.addProductToShoppingCartState }
              />
              <span data-testid="shopping-cart-product-quantity">
                {shoppingCart.filter((item) => item === product).length}
              </span>
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
