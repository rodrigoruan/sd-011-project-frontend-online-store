import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cardproduct from './Cardproduct';

class Searchfield extends Component {
  render() {
    const { products, cartQuantity } = this.props;

    return (
      <div className="container-products">
        { products.map((product) => (
          <Cardproduct
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            id={ product.id }
            categoryId={ product.category_id }
            cartQuantity={ cartQuantity }
            availableQuantity={ product.available_quantity }
          />
        )) }
      </div>
    );
  }
}

Searchfield.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  cartQuantity: PropTypes.func.isRequired,
};

export default Searchfield;
