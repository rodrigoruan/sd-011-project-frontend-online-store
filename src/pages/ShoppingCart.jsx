import React from 'react';
import PropTypes from 'prop-types';
import NewItem from '../components/NewItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredCart: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  componentDidMount() {
    this.filterFunction();
  }

  filterFunction() {
    const { cart } = this.props;
    const result = cart.reduce((acc, curr) => (acc
      .includes(curr) ? acc : acc.concat(curr)), []);
    this.setState({
      filteredCart: result,
    });
  }

  handleDelete(product) {
    const { filteredCart } = this.state;
     const newList = filteredCart.filter((item) => {
      return item.id !== product.id
    })
    this.setState({
      filteredCart: newList,
    });
  }

  increaseQuantity(product) {
    console.log('AUMENTA PRODUTO', product);
  }

  decreaseQuantity(product) {
    console.log('DIMINUI PRODUTO');
  }
  

  render() {
    const { cart } = this.props;
    const { filteredCart } = this.state;

    const emptyCart = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    return !cart.length ? emptyCart : filteredCart.map((product, index) => (
      <NewItem product={ product } cart={ cart } key={ index } 
        handleDelete={this.handleDelete} 
        increaseQuantity={this.increaseQuantity}
        decreaseQuantity={this.decreaseQuantity}
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
};

export default ShoppingCart;
