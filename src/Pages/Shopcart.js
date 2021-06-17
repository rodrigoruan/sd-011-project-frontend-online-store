import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewItem from '../Components/NewItem';

class Shopcart extends Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    this.state = {
      products: state,
      loading: true,
    };
    this.setLoading = this.setLoading.bind(this);
  }

  componentDidMount() {
    this.setLoading();
  }

  setLoading() {
    const { products } = this.state;
    if (products.length === 0) {
      this.setState({
        loading: true,
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { products, loading } = this.state;
    return (
      loading ? (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      ) : (
        products.map((product, index) => (
          <NewItem newProduct={ product } key={ index } />
        ))
      ));
  }
}

Shopcart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf().isRequired,
  }).isRequired,
};

export default Shopcart;
