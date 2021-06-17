import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    const redirectId = `/product/${id}`;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <Link to={ redirectId } data-testid="product-detail-link"> Mais informações</Link>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
