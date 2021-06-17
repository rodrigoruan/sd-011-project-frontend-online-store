import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class ListCards extends Component {
  render() {
    const { products, query, category } = this.props;
    return (
      <div>
        { products.map((product, index) => (<Card
          { ...product }
          query={ query }
          category={ category }
          key={ index }
        />))}
      </div>
    );
  }
}

ListCards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
