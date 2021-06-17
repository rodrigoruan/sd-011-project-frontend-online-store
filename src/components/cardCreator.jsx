import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class cardCreator extends React.Component {
  render() {
    const {
      product: { title, thumbnail, price, id },
      getProductDetails,
    } = this.props;
    const { product } = this.props;
    return (
      <Link
        to={ `/productDetails/${id}` }
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
};

export default cardCreator;
