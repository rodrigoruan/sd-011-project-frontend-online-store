import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends React.Component {
  render() {
    const { products, addState } = this.props;
    const notFound = 'Nenhum produto foi encontrado';

    return products.length === 0 ? notFound : (
      products.map((product) => (
        <>
          {/* Lembrar de referenciar como passar props por Linkk */}
          <Link
            to={ {
              pathname: `/details/${product.id}`,
              state: {
                product,
              },
            } }
            data-testid="product-detail-link"
          >
            <div
              data-testid="product"
              key={ product.title }
            >
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
            </div>
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addState(product) }
          >
            add
          </button>
        </>
      ))
    );
  }
}
export default CardItem;

CardItem.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.arrayOf().isRequired,
  }).isRequired,
  addState: PropTypes.func.isRequired,
};
