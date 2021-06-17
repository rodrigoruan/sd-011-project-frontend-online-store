import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default class SearchResults extends React.Component {
  render() {
    const { searchResults,
      handleSearch,
      handleChangeField,
      searchTerm,
      addItemToCart } = this.props;

    return (
      <section id="home-search" className="home-two-fourths search-section">
        <header className="search-section__header">
          <form onSubmit={ handleSearch }>
            <input
              type="text"
              value={ searchTerm }
              onChange={ handleChangeField }
              data-testid="query-input"
            />
            <p
              className="home-initial-message"
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <button type="submit" data-testid="query-button">Pesquisar</button>
          </form>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <button type="button">carrinho</button>
          </Link>
        </header>

        <ol className="search-section__results">
          {searchResults.results.map(((product) => (<ProductCard
            key={ product.id }
            product={ product }
            addItemToCart={ addItemToCart }
          />)
          ))}
        </ol>
      </section>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }),
  handleSearch: PropTypes.func,
  handleChangeField: PropTypes.func,
  searchTerm: PropTypes.string,
}.isRequired;
