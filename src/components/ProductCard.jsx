import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AddCarrinho } from './index';

class ProductCard extends Component {
  render() {
    const { title, imgPath, price, id, category_id: catId, manipulateState } = this.props;
    return (
      <div>
        <Link
          to={ `/detalhesproduto/${catId}/${id}/${title}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h3>{title}</h3>
            <img src={ imgPath } alt={ title } />
            <p>{price}</p>
          </div>
        </Link>
        <AddCarrinho
          testId="product-add-to-cart"
          title={ title }
          price={ price }
          id={ id }
          manipulateState={ manipulateState }
        />
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  category_id: PropTypes.string.isRequired,
  manipulateState: PropTypes.func.isRequired,
};
