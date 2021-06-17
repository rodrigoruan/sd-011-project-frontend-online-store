import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const product = JSON.parse(sessionStorage.getItem(id));
    return (
      <div>
        {(product === undefined) ? <p>loading...</p> : <p data-testid="product-detail-name">{ product.name }</p>}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.isRequired,
};

export default ProductDetails;
