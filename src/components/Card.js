import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { name, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{name}</h2>
        <img src={ thumbnail } alt={ name } />
        <p>{price}</p>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
