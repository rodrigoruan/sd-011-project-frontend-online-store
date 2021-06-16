import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

export default class ProductsList extends React.Component {
  render() {
    const { products, handleAddToShopCart } = this.props;

    return (
      <div>
        {
          products.length
            ? (
              products.map(({ id, thumbnail, title, price }, index) => (
                <ProductCard
                  key={ index }
                  id={ id }
                  thumbnail={ thumbnail }
                  title={ title }
                  price={ price }
                  handleAddToShopCart={ handleAddToShopCart }
                />
              ))
            ) : (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
        }
      </div>
    );
  }
}

ProductsList.propTypes = {
  handleAddToShopCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
