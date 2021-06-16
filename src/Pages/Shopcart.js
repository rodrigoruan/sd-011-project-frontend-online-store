import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Shopcart extends Component {
  constructor(props) {
    super(props);

    // const { params } = this.props;
    const { location: { state } } = this.props;
    this.state = {
      state,
      empty: false,
    };

    this.setLoading = this.setLoading.bind(this);
  }

  componentDidMount() {
    const { state } = this.state;
    if (state) this.setLoading();
  }

  setLoading() {
    this.setState(() => ({
      empty: true,
    }));
  }

  render() {
    const { state, empty } = this.state;
    return !empty ? (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    ) : (
      state.map((product, index) => (
        <div key={ index }>
          <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
          <h5 data-testid="shopping-cart-product-quantity">11</h5>
        </div>
      ))
    );
  }
}

Shopcart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf().isRequired,
  }).isRequired,
};

export default Shopcart;
