import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import * as api from '../services/api';
// import Cart from './Cart';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
    };
  }

  render() {
    return (
      <>
        <Link to="/">Voltar</Link>
        <Link to="/shopping-cart">Carrinho</Link>
        <h1>Product Details</h1>
      </>
    )
  }
}
