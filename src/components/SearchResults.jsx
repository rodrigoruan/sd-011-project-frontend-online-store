import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

import searchSvg from '../searchSvg';

export default class SearchResults extends React.Component {
  render() {
    const { searchResults,
      handleSearch,
      handleChangeField,
      searchTerm,
      addItemToCart } = this.props;

    return (
      <section id="home-search" className="col-span-3">
        <header className="mb-12">
          <p
            className="home-initial-message mb-2 ml-3"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <form onSubmit={ handleSearch } className="flex">
            <div className="searchForm">
              <input
                type="text"
                value={ searchTerm }
                onChange={ handleChangeField }
                data-testid="query-input"
                className="w-full bg-transparent"
              />
              { searchSvg }
            </div>

            <button
              type="submit"
              data-testid="query-button"
              className="w-32 bg-gray-500 rounded-lg ml-4 hover:bg-gray-400 transition"
            >
              Pesquisar
            </button>
          </form>
        </header>
        <ol className="flex flex-wrap gap-y-12 justify-between">
          { searchResults.results.map(((product) => (<ProductCard
            key={ product.id }
            product={ product }
            addItemToCart={ addItemToCart }
          />)
          )) }
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
