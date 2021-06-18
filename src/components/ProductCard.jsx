import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { item, addProductToShoppingCartStateProps } = this.props;
    const { item: { title, thumbnail, price, id } } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt="imagem produto" />
        <p>{price}</p>
        <Link data-testid="product-detail-link" to={ `/product-details/${id}` }>
          DETALHES
        </Link>
        <br />
        <button
          onClick={ () => addProductToShoppingCartStateProps(item) }
          type="button"
          data-testid="product-add-to-cart"
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  addProductToShoppingCartStateProps: PropTypes.func,
};

ProductCard.defaultProps = {
  addProductToShoppingCartStateProps: () => {},
};

export default ProductCard;
