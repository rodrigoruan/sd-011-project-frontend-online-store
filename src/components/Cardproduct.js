import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cardproduct extends Component {
  render() {
    const { title, img, price } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ img } width="100px" alt="produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

Cardproduct.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Cardproduct;
