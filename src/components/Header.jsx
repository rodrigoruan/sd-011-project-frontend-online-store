import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartButton from './ShoppingCartButton';

export class Header extends Component {
  render() {
    const { showCartButton, totalItemCount } = this.props;

    return (
      <header className="p-10 flex justify-between">
        <h1><Link to="/">Fortim (14 em engrish)</Link></h1>
        { showCartButton && <ShoppingCartButton totalItemCount={ totalItemCount } /> }
      </header>
    );
  }
}

export default Header;

Header.defaultProps = {
  showCartButton: false,
  totalItemCount: 0,
};

Header.propTypes = {
  showCartButton: PropTypes.bool,
  totalItemCount: PropTypes.number,
};
