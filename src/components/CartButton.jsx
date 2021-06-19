import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import cartImage from '../img/cart.jpg';

class CartButton extends Component {
  render() {
    const { link } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to={link}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Image
          src={cartImage}
          style={{ width: '30px', height: '30px', marginLeft: '100px' }}
        />
      </Link>
    );
  }
}

CartButton.propTypes = {
  link: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.objectOf(PropTypes.array),
  }),
};

CartButton.defaultProps = {
  link: {},
};

export default CartButton;
