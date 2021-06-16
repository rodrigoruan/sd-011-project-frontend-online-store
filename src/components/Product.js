import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Product extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props)
    const { location: { state: {title, price, thumbnail, attributes}} } = this.props;
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
