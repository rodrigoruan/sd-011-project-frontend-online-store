import React from 'react';
import * as api from '../services/api';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
    this.getProductFromTitle = this.getProductFromTitle.bind(this);
    this.buildTechSpecifications = this.buildTechSpecifications.bind(this);
  }

  componentDidMount() {
    this.getProductFromTitle();
  }

  async getProductFromTitle() {
    const { match: { params: { title, id } } } = this.props;
    const products = await api.getProductsFromCategoryAndQuery('', title);
    const theProduct = products.results.filter((product) => product.id === id);
    this.setState({
      product: theProduct,
    });
  }

  buildTechSpecifications() {
    const { product } = this.state;
    console.log(product);
    /* return attributes.map((attribute) => (
      <ul key={ attribute.id }>
        <li>
          {`${attribute.name}: ${attribute.value_name}`}
        </li>
      </ul>
    )); */
  }

  render() {
    const { match: { params: { title } } } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        {this.buildTechSpecifications()}
      </div>
    );
  }
}
