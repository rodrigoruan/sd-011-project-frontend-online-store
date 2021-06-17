import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { product: { title, price, thumbnail, id } } = this.props;

    return (
      <div className="product-card" data-testid="product">
        <Link
          to={ {
            pathname: `/detalhes/:${id}`,
            state: product,
          } }
          data-testid="product-detail-link"
        >
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </Link>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = ({
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
}).isRequired;
