import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { location: { state: { title, price, thumbnail, attributes } } } = this.props;
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
  location: PropTypes.shape({
    state: {
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
    },
  }).isRequired,
};
