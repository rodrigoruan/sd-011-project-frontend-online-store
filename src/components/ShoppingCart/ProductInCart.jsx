import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductInCart.css';
import EachItem from './EachItem';
import EmptyCartLine from './EmptyCartLine';

export default class ProductInCart extends Component {
  render() {
    const { items, removeItem } = this.props;
    return (
      <div className="mainCartContainer">
        {items.length === 0 ? <EmptyCartLine />
          : items.map((item) => (
            <EachItem item={ item } key={ item.id } removeItem={ removeItem } />
          ))}
      </div>
    );
  }
}

ProductInCart.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
  removeItem: PropTypes.func.isRequired,
};
