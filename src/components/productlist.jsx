import React, { Component } from 'react';
import ProductCard from './productcard';


class ProductList extends Component {
  render() { 
    return ( 
      <ol>
        <ProductCard/>
      </ol>
    );
  }
}
 
export default ProductList;