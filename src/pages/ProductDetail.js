import React from 'react';
import PropTypes from 'prop-types';
import ButtonShopCart from '../Components/ButtonShopCart';

class ProductDetail extends React.Component {
  render() {
    const { addCartItem } = this.props;
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    return (
      <div className="card-flex">
        <img src={ product.thumbnail } alt="" />
        <div className="details-card-product">
          <div
            data-testid="product-detail-name"
          >
            {product.title}
          </div>
          <p>{`R$ ${product.price}`}</p>
        </div>
        <button
          className="searchButton"
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ addCartItem }
          value={ JSON.stringify(product) }
        >
          Adicionar
        </button>
        <div>
          <ButtonShopCart />
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  addCartItem: PropTypes.func.isRequired,
};

export default ProductDetail;
