import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import carrinho from '../carrinho.png';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const {
      productDetails: {
        title,
        thumbnail,
        price,
        attributes,
      },
    } = this.props;
    this.state = {
      title,
      thumbnail,
      price,
      attributes,
    };
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state;
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
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ carrinho } alt="carrinho" />
        </Link>
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
  }).isRequired,
};

export default ProductDetails;
