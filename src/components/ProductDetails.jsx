import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as fetchAPI from '../services/api';
/* import ProductCard from './ProductCard'; */

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCards: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { match } = this.props;
    const { id } = match.params;
    const fetchedProducts = await
    fetchAPI.getProductsFromCategoryAndQuery(id);
    const product = fetchedProducts.results.find((item) => item.id === id);
    this.setState({ productCards: product });
  }

  render() {
    const { productCards: { title, price, thumbnail } } = this.state;
    return (

      <div data-testid="product">
        <h4 data-testid="product-detail-name">{title}</h4>
        <p>{`R$ ${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        <p>Detalhes Técnicos</p>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};
