import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { name, img, price } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <img src={ img } alt={ name } />
        <p>{price}</p>
      </div>
    );
  }
}

export default Card;
