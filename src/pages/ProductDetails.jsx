import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as api from '../services/api';
// import Cart from './Cart';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
    };
    console.log(props);

    this.getProductById = this.getProductById.bind(this);
  }

  async getProductById() {
    const { match: { params: { id } } } = this.props;
    const results = await api.getProductsFromCategoryAndQuery(id, false);
    console.log(results);
  }

  componentDidMount() {
    this.getProductById();
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
