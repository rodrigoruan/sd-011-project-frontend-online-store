import React from 'react';
import PropTypes from 'prop-types';

class cardCreator extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <p className="productName">{title}</p>
        <img src={ thumbnail } alt="Foto do Produto" className="productPicture" />
        <p className="productPrice">{price}</p>
      </div>
    );
  }
}

cardCreator.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default cardCreator;
