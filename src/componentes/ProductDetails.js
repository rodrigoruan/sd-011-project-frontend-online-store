import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCart from './ButtonCart';
import { saveStorage } from '../services/saveService';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    const { state } = location;
    const { products } = state;

    // const { title, thumbnail, price, condition } = products;

    this.state = {
      quantity: 0,
      products,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { quantity } = this.state;
    const count = quantity + 1;
    this.setState({ quantity: count }, () => { saveStorage(this.state); });
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { products } = state;

    const { title, thumbnail, price, condition } = products;

    return (
      <div>
        <img data-testid="product" src={ thumbnail } alt="product" />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h4>{ price }</h4>
        <ul>
          <li>{ condition }</li>
        </ul>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.addToCart() }
        >
          Adicionar ao Carrinho
        </button>
        <ButtonCart />
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  location: PropTypes.objectOf({}),
}.isRequired;
