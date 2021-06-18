import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ItemProduct extends Component {
  render() {
    const num = 10;
    const {
      handleAddToCart,
      item: { thumbnail, title, price, id, category_id },
    } = this.props;
    return (
      <div data-testid="product" className="content" key={id}>
        <img src={thumbnail} alt="product thumbnail" />
        <h3>{title}</h3>
        <h6>
          R$
          {parseFloat(price, num).toFixed(2)}
        </h6>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={() => handleAddToCart(id, title, thumbnail, price)}
          className="btn btn-success"
        >
          Add to Cart!
        </button>
        <Link
          to={{
            pathname: `/details/${id}`,
            state: { id, category_id, title },
          }}
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

ItemProduct.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  item: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
