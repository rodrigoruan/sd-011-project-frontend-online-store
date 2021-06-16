import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match } = this.props;
    const { id } = match.params;

    getProductsFromCategoryAndQuery(false, false, id)
      .then((response) => this.setState({ api: response }));
  }

  render() {
    const { api } = this.state;
    const { title, price, thumbnail, attributes } = api;
    return (
      <>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
        <div>
          <ul>
            {attributes && attributes.map(({ name }, index) => (
              <li key={ index }>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/cart">Carrinho</Link>
      </>
    );
  }
}

Product.propTypes = {
  match: PropTypes.objectOf(PropTypes.array).isRequired,
  id: PropTypes.string.isRequired,
};
