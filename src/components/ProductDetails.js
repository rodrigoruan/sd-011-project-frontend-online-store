import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
    this.getProduct = this.getProduct.bind(this);
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } }, category, query } = this.props;
    const products = await getProductsFromCategoryAndQuery(category, query);
    const product = products.results.find((prod) => prod.id === id);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    return (
      <div data-testid="product-detail-name">
        {(product === null)
          ? <p>Loading...</p>
          : <p>{ product.title }</p>}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.isRequired,
  category: PropTypes.isRequired,
  query: PropTypes.isRequired,
};

export default ProductDetails;
