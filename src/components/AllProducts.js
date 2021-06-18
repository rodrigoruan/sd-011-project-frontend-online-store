import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class AllProducts extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    product.quantity = 1;
    if (!products.some((value) => value.id === product.id)) {
      products.push(product);
    } else {
      const currentIndex = products.map((value) => value.id).indexOf(product.id);
      products[currentIndex].quantity += 1;
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  render() {
    const { productsList } = this.props;
    if (!productsList[0]) {
      return <span>Nenhum produto foi encontrado</span>;
    }
    return (
      <div>
        {productsList.map((product) => (
          <CardProduct
            addToCartFunction={ this.addToCart }
            product={ product }
            key={ product.id }
          />))}
      </div>
    );
  }
}

AllProducts.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default AllProducts;
