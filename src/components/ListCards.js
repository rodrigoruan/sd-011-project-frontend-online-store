import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class ListCards extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => <Card { ...product } key={ product.id } />)}
      </div>
    );
  }
}

ListCards.propTypes = {
  products: PropTypes.isRequired,
};
