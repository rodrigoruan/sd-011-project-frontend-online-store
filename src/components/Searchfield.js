import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cardproduct from './Cardproduct';

class Searchfield extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <Cardproduct
            key={ product.id }
            title={ product.title }
            img={ product.thumbnail }
            price={ product.price }
            id={ product.id }
            categoryId={ product.category_id }
          />
        )) }
      </div>
    );
  }
}

Searchfield.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default Searchfield;
