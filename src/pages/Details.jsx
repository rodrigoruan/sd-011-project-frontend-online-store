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
        <AddToCartButton
          id={ productId }
          addCart={ addCartFunction }
          title={ title }
          price={ price }
        />
        <Link to="/cart">Carrinho</Link>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Details;
