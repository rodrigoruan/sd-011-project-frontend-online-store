import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
    let quantity;
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
        <img src={ product.thumbnail } alt="product" />
        <p data-testid="product-detail-name">{product.title}</p>
        <p>{product.price}</p>
        {product.attributes
        && product.attributes.map((att, index) => (
          <p key={ index }>
            {att.name}
            -
            { att.value_name }
          </p>
        ))}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          className="btn btn-success"
          onClick={ () => handleAddToCart(id, thumbnail, title, price, (quantity = 1)) }
        >
          Add to Cart!
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      category_id: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};
