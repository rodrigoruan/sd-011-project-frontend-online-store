import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class ListCards extends Component {
  render() {
    const { products, query, category } = this.props;
    return (
      <div>
        {(products === undefined) ? <p>Loading...</p>
          : products.map((product, index) => (
            <div key={ index }>
              <Card
                { ...product }
                query={ query }
                category={ category }
              />
            </div>))}
      </div>
    );
  }
}

ListCards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  addCartFunc: PropTypes.func.isRequired,
};
