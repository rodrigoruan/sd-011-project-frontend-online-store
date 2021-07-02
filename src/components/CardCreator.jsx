import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';
import './CardCreator.css';

class cardCreator extends React.Component {
  render() {
    const {
      product,
      product: {
        title,
        thumbnail,
        price,
        id,
        shipping: { free_shipping: freeShipping },
      },
      getProductDetails,
      updateQuantityIcon,
    } = this.props;
    return (
      <div className="product">
        <Link
          to={ `/product-details/${id}` }
          data-testid="product-detail-link"
          onClick={ () => {
            getProductDetails(product);
          } }
        >
          <div data-testid="product" className="product-details">
            <p className="product-name">{title}</p>
            <img src={ thumbnail } alt="Foto do Produto" className="product-picture" />
            <p className="productPrice">{`R$ ${price}` }</p>
            <p>
              { 'Frete Grátis: ' }
              { freeShipping
                ? <span data-testid="free-shipping">Sim</span>
                : <span>Não</span> }
            </p>
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  getProductDetails: PropTypes.func.isRequired,
  updateQuantityIcon: PropTypes.func.isRequired,
};

export default cardCreator;
