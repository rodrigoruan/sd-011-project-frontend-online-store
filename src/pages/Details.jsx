import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCartButton from '../components/AddToCartButton';

class Details extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { location } = this.props;
    this.state = {
      productId: match.params.id,
      productDetails: location.aboutProps,
    };
  }

  render() {
    const { productDetails, productId } = this.state;
    const { price, image, title, addCartFunction } = productDetails;
    return (
      <div>
        <img src={ image } alt={ title } />
        <p data-testid="product-detail-name">{title}</p>
        <p>{`R$: ${price}`}</p>
        <div data-testid="product-detail-add-to-cart">
          <AddToCartButton
            id={ productId }
            addCart={ addCartFunction }
            title={ title }
            price={ price }
          />
        </div>
        <Link
          to={ {
            pathname: '/cart',
            aboutProps: {
              itensCarrinho: [productDetails],
            },
          } }
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Details;
