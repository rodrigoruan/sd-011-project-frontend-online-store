import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class cardCreator extends React.Component {

  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
        <Link to={`/productDetails/${id}`} data-testid="product-detail-link" className="productDetails">
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
  }).isRequired,
};

export default cardCreator;
