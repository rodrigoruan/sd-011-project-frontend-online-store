import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();
    this.setStorage = this.setStorage.bind(this);
  }

  setStorage() {
    const { name, thumbnail, price, id, attributes } = this.props;
    const product = {
      name,
      thumbnail,
      price,
      id,
      attributes,
    };
    sessionStorage.setItem(id, JSON.stringify(product));
  }

  render() {
    const { name, thumbnail, price, id } = this.props;
    const redirectId = `/product/${id}`;
    return (
      <div data-testid="product">
        <h2>{name}</h2>
        <img src={ thumbnail } alt={ name } />
        <p>{price}</p>
        <Link to={ redirectId } data-testid="product-detail-link">
          <button type="button" onClick={ this.setStorage }>
            Mais informações
          </button>
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  attributes: PropTypes.isRequired,
};

export default Card;
