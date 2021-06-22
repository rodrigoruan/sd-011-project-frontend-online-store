import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { ProductReviewForm } from '../components/zComponentsMenu';
import * as storage from '../services/storage';
import Cart from '../components/Cart';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { location } = this.props;
    const { state } = location;
    const { categoryId, title, id } = state;
    const request = await getProductsFromCategoryAndQuery(categoryId, title);
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
    const { handleAddToCart } = this.props;
    const getReviews = storage.readReviews('reviews');
    const { product } = this.state;
    if (!product) {
      return 'Loading...';
    }

    return (
      <div>
        <img src={ product.thumbnail } alt="product" />
        <p data-testid="product-detail-name">{product.title}</p>
        <p>{product.price}</p>
        {product.attributes
          && product.attributes.map((att, index) => (
            <p key={ index }>
              {att.name}
              -
              {att.value_name}
            </p>
          ))}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          className="btn btn-success"
          onClick={ () => handleAddToCart(product) }
        >
          Add to Cart!
        </button>
        <Cart />
        <hr />
        <ProductReviewForm handleFormSubmit={ this.handleFormSubmit } />
        <div>
          <h4>Avaliações já feitas:</h4>
          {getReviews
            && getReviews.map((el, index) => (
              <div key={ index }>
                <hr />
                <h5>
                  E-mail:
                  {el.email}
                </h5>
                <h5>
                  Nota:
                  {el.score}
                </h5>
                <h5>
                  Avaliação:
                  {el.message}
                </h5>
                <hr />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      categoryId: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.string,
    }),
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  state: PropTypes.shape({
    category_id: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
