import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import AddToCartBtn from './AddCardButton';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productObject: null,
    };
    this.getProduct = this.getProduct.bind(this);
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { ProductId } }, category, query } = this.props;
    const products = await getProductsFromCategoryAndQuery(category, query);
    const product = products.results.find((prod) => prod.id === ProductId);
    const { title, id, price, thumbnail, attributes } = product;
    const productObject = {
      title,
      id,
      price,
      thumbnail,
      attributes,
    };
    this.setState({ productObject });
  }

  render() {
    const { productObject } = this.state;
    const { addCartFunc } = this.props;
    return (
      <div data-testid="product-detail-name">
        {(productObject === null)
          ? <p>Loading...</p>
          : <p>{ productObject.title }</p>}
        <AddToCartBtn addCartFunc={ addCartFunc } product={ productObject } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.isRequired,
  category: PropTypes.isRequired,
  query: PropTypes.isRequired,
  addCartFunc: PropTypes.func.isRequired,
};

export default ProductDetails;
