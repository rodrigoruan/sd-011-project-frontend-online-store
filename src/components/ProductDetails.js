import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match } = this.props;
    const { id } = match.params;
    const request = await getProductsFromCategoryAndQuery('$CATEGORY_ID', `${id}`);
    const product = await request.results.filter((result) => (
      result.title === id
    ));
    await this.setState({
      product: product[0],
    });
    return product[0];
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <img src={ product.thumbnail } alt="product" />
        <p data-testid="product-detail-name">{product.title}</p>
        <p>{ product.price }</p>
        { product.attributes && product.attributes.map((att, index) => (
          <p key={ index }>
            { att.name }
            -
            { att.value_name }
          </p>
        ))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf().isRequired,
};

export default ProductDetails;
