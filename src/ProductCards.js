import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    // console.log(this.props);
    const { produto: { title, thumbnail, price, id } } = this.props;
    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/details/${id}`,
          data: title,
        } }
      >
        <div data-testid="product" className="product">
          <h3>{ title }</h3>
          <img className="product-img" width="100px" src={ thumbnail } alt={ title } />
          <p className="price">
            Preço: R$
            { price }
          </p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
