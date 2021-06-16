import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

export default class ProductsList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        {
          products.length
            ? (
              products.map(({ id, thumbnail, title, price }) => (
                <ProductCard
                  id={ id }
                  thumbnail={ thumbnail }
                  title={ title }
                  price={ price }
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
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
