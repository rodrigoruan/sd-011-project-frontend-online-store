import React, { Component } from 'react';
// import ProductCard from './ProductCard';

class ProductLibrary extends Component {
  render() {
    const { productsList } = this.props;
    // console.log(productsList);
    return (
      <div>
        {productsList.map((product) => console.log(product))}
        {/* {productsList.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
        />))} */}
      </div>
    );
  }
}

export default ProductLibrary;
