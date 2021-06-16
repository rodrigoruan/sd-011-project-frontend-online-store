import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { name, img, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{name}</h2>
        <img src={ img } alt={ name } />
        <p>{price}</p>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
