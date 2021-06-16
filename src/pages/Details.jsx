import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { preco, image, name } = productDetails;
    return (
      <div>
        <img src={ image } alt={ name } />
        <p>{ productId }</p>
        <p data-testid="product-detail-name">{name}</p>
        <p>{`R$: ${preco}`}</p>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Details;
