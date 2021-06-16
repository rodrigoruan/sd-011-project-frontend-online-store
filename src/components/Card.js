import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { title, price, thumbnail, id, attributes } = this.props;
    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/produtos/${id}`,
          state: { title, price, thumbnail, id, attributes },
        } }
      >
        <div data-testid="product">
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            {price}
          </p>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
