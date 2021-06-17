import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { title, imgPath, price, id, category_id, apiResp, search } = this.props;
    return (
      <Link
        to={ `/detalhesproduto/${search}/${category_id}/${id}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h3>{ title }</h3>
          <img src={ imgPath } alt={ title } />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
