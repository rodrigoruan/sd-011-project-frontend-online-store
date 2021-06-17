import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <div key={ index }>
            <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
            <h5 data-testid="shopping-cart-product-quantity">11</h5>
          </div>
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
