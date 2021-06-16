import React from 'react';
import PropTypes from 'prop-types';
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
    if (product.length > 0) {
      /* console.log(product[0].attributes); */
      return product[0].attributes.map((attribute) => (
        <ul key={ attribute.id }>
          <li>
            {`${attribute.name}: ${attribute.value_name}`}
          </li>
        </ul>
      ));
    }
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

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};
