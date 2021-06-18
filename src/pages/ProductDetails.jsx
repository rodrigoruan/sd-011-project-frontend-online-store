import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import * as api from '../services/api';
// import Cart from './Cart';

export default class ProductDetails extends Component {

  render() {
    const { location: { selectedProduct } } = this.props;
    const { title, thumbnail, price } = selectedProduct;
    console.log(title, thumbnail, price)
    // const { title, thumbnail, price } = selectedProduct;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/shopping-cart">Carrinho</Link>
        <h1>Product Details</h1>

        <div>
          <h3 data-testid="product-detail-name">{ title }</h3>
          <img src={thumbnail} alt="" />
          <p>Preço: ${ price }</p>
        </div>

      </div>
    )
  }
}
