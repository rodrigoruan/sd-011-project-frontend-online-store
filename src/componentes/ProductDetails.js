import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCart from './ButtonCart';
import Form from './Form';

class ProductDetails extends Component {
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
        <ButtonCart />
        <Form />
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  location: PropTypes.objectOf({}),
}.isRequired;
