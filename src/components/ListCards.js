import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import AddToCartBtn from './AddCardButton';

export default class ListCards extends Component {
  render() {
    const { products, query, category, addCartFunc } = this.props;
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
              <AddToCartBtn addCartFunc={ addCartFunc } product={ product } />
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
