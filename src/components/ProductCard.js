import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemProduct extends Component {
  render() {
    const num = 10;
    const { handleAddToCart, item: { thumbnail, title, price, id } } = this.props;
    return (
      <div data-testid="product" className="content" key={ id }>
        <img src={ thumbnail } alt="product thumbnail" />
        <h3>{title}</h3>
        <h6>
          R$
          {parseFloat(price, num).toFixed(2)}
        </h6>
        <button
          type="button"
          onClick={() => handleAddToCart(id, title, thumbnail, price)}
          className="btn btn-success"
        >
          Add to Cart!
        </button>

      </div>
    );
  }
}

ItemProduct.propTypes = {
  handleAddToCart: PropTypes.func,
  item: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }),
};

ItemProduct.defaultProps = {
  item: {},
};
