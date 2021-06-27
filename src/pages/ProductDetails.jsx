import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import carrinho from '../images/carrinho.png';
import RatingForm from '../components/RatingForm';
import AddToCart from '../components/AddToCart';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const {
      productDetails: {
        title,
        thumbnail,
        price,
        attributes,
        shipping: { free_shipping: freeShipping },
      },
    } = this.props;
    this.state = {
      title,
      thumbnail,
      price,
      attributes,
      freeShipping,
    };
  }

  render() {
    const { title, thumbnail, price, attributes, freeShipping } = this.state;
    const { productDetails, quantityIcon, updateQuantityIcon } = this.props;
    return (
      <div>
        <p className="productDetailsName" data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt="Foto do Produto" />
        <p className="productDetailsPrice">{`Preço: R$${price}`}</p>
        <ul>
          {
            attributes ? attributes.map(({ name, value_name: value }, index) => (
              <li key={ index }>{`${name}: ${value}`}</li>
            )) : <p>Loading...</p>
          }
        </ul>
        <p>
          Frete Grátis:
          { freeShipping
            ? <span data-testid="free-shipping">Sim</span>
            : <span>Não</span> }
        </p>
        <AddToCart
          item={ productDetails }
          test="product-detail-add-to-cart"
          updateQuantityIcon={ updateQuantityIcon }
        />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ carrinho } alt="carrinho" />
          <span data-testid="shopping-cart-size">{ quantityIcon }</span>
        </Link>
        <div>
          <RatingForm />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    attributes: PropTypes.arrayOf(PropTypes.any).isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  quantityIcon: PropTypes.number.isRequired,
  updateQuantityIcon: PropTypes.func.isRequired,
};

export default ProductDetails;
