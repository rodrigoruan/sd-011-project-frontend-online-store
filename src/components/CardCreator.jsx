import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

class cardCreator extends React.Component {
  render() {
    const {
      product,
      product: { title, thumbnail, price, id },
      getProductDetails,
      updateQuantityIcon,
    } = this.props;
    return (
      <div>
        <Link
          to={ `/product-details/${id}` }
          data-testid="product-detail-link"
          className="productDetails"
          onClick={ () => {
            getProductDetails(product);
          } }
        >
          <div data-testid="product">
            <p className="productName">{title}</p>
            <img src={ thumbnail } alt="Foto do Produto" className="productPicture" />
            <p className="productPrice">{price}</p>
          </div>
        </Link>
        <AddToCart
          item={ product }
          test="product-add-to-cart"
          updateQuantityIcon={ updateQuantityIcon }
        />
      </div>
    );
  }
}

cardCreator.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category_id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  getProductDetails: PropTypes.func.isRequired,
  updateQuantityIcon: PropTypes.func.isRequired,
};

export default cardCreator;
