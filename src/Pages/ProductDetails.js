import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      product: {},
    };

    this.setProduct = this.setProduct.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  componentDidMount() {
    const product = JSON.parse(sessionStorage.getItem('product'));
    if (!product) this.setRedirect();
    console.log(product);
    this.setProduct(product);
  }

  setProduct(product) {
    this.setState(() => ({
      product,
    }));
  }

  setRedirect() {
    this.setState(() => ({
      redirect: true,
    }));
  }

  render() {
    const { redirect, product } = this.state;
    const { title, thumbnail, price } = product;
    return !redirect ? (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        { price }
      </div>
    ) : (<Redirect to="/" />);
  }
}

export default ProductDetails;
