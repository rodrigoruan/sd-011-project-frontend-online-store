import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: undefined,
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    console.log(product);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        {(product === undefined)
          ? <p>Loading...</p>
          : <p data-testid="product-detail-name">{ product.title }</p>}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.isRequired,
};

export default ProductDetails;
