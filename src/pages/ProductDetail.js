import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  onAddToCart= () => {
    const { onAddToCart } = this.props;
    const { location } = this.props;
    const { state } = location;
    const { product } = state;

    onAddToCart(product);
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;

    return (
      <div data-testid="product-detail-name">
        <h2>{ product.title }</h2>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.onAddToCart }
        >
          Adicionar no Carrinho
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetail;
