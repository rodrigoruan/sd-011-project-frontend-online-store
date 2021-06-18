import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      loading: true,
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const {
      location: {
        state: { category_id, id, title },
      },
    } = this.props;
    const request = await getProductsFromCategoryAndQuery(category_id, title);
    const product = await request.results.find((result) => result.id === id);
    this.setState({ product });
  }

  render() {
    const { loading, product } = this.state;
    if (!product) {
      return 'Loading...';
    }
    return (
      <div>
        <img src={product.thumbnail} alt="product" />
        <p data-testid="product-detail-name">{product.title}</p>
        <p>{product.price}</p>
        {product.attributes &&
          product.attributes.map((att, index) => (
            <p key={index}>
              {att.name}-{att.value_name}
            </p>
          ))}
      </div>
    );
  }
}
