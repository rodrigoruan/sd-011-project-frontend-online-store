import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    return <div>{ product.title }</div>;
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
  state: PropTypes.object,
  product: PropTypes.object,
}.isRequired;

export default ProductDetail;
