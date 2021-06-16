import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { products } = this.props;
    console.log(products);
    const { title, price, thumbnail } = products;
    return (
      <div>
        <img data-testid="product" src={ thumbnail } alt="product" />
        <h3>{ title }</h3>
        <h4>{ price }</h4>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default Products;
