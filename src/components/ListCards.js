import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class ListCards extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product, index) => (
          <div key={ index }>
            <Card
              { ...product }
              key={ index }
            />
          </div>))}
      </div>
    );
  }
}

ListCards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
