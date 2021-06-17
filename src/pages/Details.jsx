import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.state = {
      productDetails: location.aboutProps,
    };
  }

  render() {
    const { productDetails } = this.state;
    const { preco, image, name } = productDetails;
    return (
      <div>
        <img src={ image } alt={ name } />
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
