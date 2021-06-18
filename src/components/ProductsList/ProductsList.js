/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

export default class ProductsList extends React.Component {
  render() {
    const { products, handleAddToShopCart } = this.props;
    return (
      <div className="products-list-container">
        {products.length ? (
          products.map(
            ({ id, thumbnail, title, price, availableQuantity, shipping }, index) => (
              <ProductCard
                key={ index }
                id={ id }
                thumbnail={ thumbnail }
                title={ title }
                price={ price }
                handleAddToShopCart={ handleAddToShopCart }
                availableQuantity={ availableQuantity }
                shipping={ shipping?.free_shipping }
              />
            ),
          )
        ) : (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </div>
    );
  }
}

ProductsList.propTypes = {
  handleAddToShopCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};
