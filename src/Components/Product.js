import React, { Component } from 'react';
import style from './Home.module.css';

export class Product extends Component {
  render() {
    return (
      <div className={ style.product }>
        Produto
      </div>
    );
  }
}

export default Product;
