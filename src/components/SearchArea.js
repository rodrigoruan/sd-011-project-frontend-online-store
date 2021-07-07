import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';
import '../styles/SearchArea.css';

class SearchArea extends Component {
  render() {
    const { products, createCart, cartQuant } = this.props;
    const preText = (
      <h1 className="searchTitle" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
    return (
      <div className="searchArea">
        { products.length === 0 ? preText : products.map((product, index) => (<Products
          key={ index }
          title={ product.title }
          price={ product.price }
          img={ product.thumbnail }
          product={ product }
          func={ createCart }
          products={ products }
          cartQuant={ cartQuant }
        />
        ))}
      </div>
    );
  }
}

SearchArea.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  createCart: PropTypes.func.isRequired,
  cartQuant: PropTypes.number.isRequired,
};

export default SearchArea;
