import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import * as api from '../services/api';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  componentDidMount() {
    api.getCategories();
  }

  handleChangeField(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleSearch(e) {
    e.preventDefault();
    const { updateSearchResults } = this.props;
    const { searchTerm } = this.state;

    api.getProductsFromCategoryAndQuery('', searchTerm)
      .then((result) => updateSearchResults(result))
      .catch((err) => console.error(err));
  }

  render() {
    const { searchResults } = this.props;
    const { searchTerm } = this.state;

    return (
      <section id="home-search" className="home-two-fourths search-section">
        <header className="search-section__header">
          <form onSubmit={ this.handleSearch }>
            <input
              type="text"
              value={ searchTerm }
              onChange={ this.handleChangeField }
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
      id: PropTypes.string.isRequired,
    })),
  }).isRequired,
  updateSearchResults: PropTypes.func.isRequired,
};
