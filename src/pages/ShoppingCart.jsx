import React from 'react';
import PropTypes from 'prop-types';
import NewItem from '../components/NewItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredCart: [],
      // count: 0,
      // products: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.filterFunction();
  }

  handleDelete(product) {
    const { filteredCart } = this.state;
    const newList = filteredCart.filter((item) => item.id !== product.id);
    this.setState({
      filteredCart: newList,
    });
  }

  filterFunction() {
    const { cart } = this.props;
    const result = cart.reduce((acc, curr) => (acc
      .includes(curr) ? acc : acc.concat(curr)), []);
    this.setState({
      filteredCart: result,
    });
  }

  render() {
    const { cart, increaseQuantity, decreaseQuantity } = this.props;
    const { filteredCart /* , count, products */ } = this.state;

    const emptyCart = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    return !cart.length ? emptyCart : filteredCart.map((product, index) => (
      <NewItem
        product={ product }
        cart={ cart }
        key={ index }
        handleDelete={ this.handleDelete }
        increaseQuantity={ increaseQuantity }
        decreaseQuantity={ decreaseQuantity }
      />
    ));
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.arrayOf().isRequired,
    reduce: PropTypes.func.isRequired,
  }).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
