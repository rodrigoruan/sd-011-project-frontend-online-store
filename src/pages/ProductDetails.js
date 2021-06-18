import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { ProductReviewForm } from '../components/zComponentsMenu';
import * as storage from '../services/storage';

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

  handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formReview = {
      message: data.get('message'),
      email: data.get('email'),
      score: data.get('score'),
    };
    storage.createReview(formReview, 'reviews');
    this.forceUpdate();
  };

  render() {
    const getReviews = storage.readReviews('reviews');
    const quantity = 1;
    const { product } = this.state;
    const {
      handleAddToCart,
      location: {
        state: { id, thumbnail, title, price },
      },
    } = this.props;
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
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          className="btn btn-success"
          onClick={() => handleAddToCart(id, thumbnail, title, price, quantity)}
        >
          Add to Cart!
        </button>
        <hr />
        <ProductReviewForm handleFormSubmit={this.handleFormSubmit} />
        <div>
          <h4>Avaliações já feitas:</h4>
          {getReviews &&
            getReviews.map((el, index) => {
              return (
                <div key={index}>
                  <hr />
                  <h5>E-mail: {el.email}</h5>
                  <h5>Nota: {el.score}</h5>
                  <h5>Avaliação: {el.message}</h5>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
