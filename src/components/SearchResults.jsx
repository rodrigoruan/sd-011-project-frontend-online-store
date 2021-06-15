import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '.';
import * as api from '../services/api';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    api.getCategories();
  }

  handleSearch(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  render() {
    const { searchResults } = this.props;
    const { searchTerm } = this.state;

    return (
      <section id="home-search" className="home-two-fourths search-section">
        <header className="search-section__header">
          <input
            type="text"
            value={ searchTerm }
            onChange={ this.handleSearch }
          />
          <p
            className="home-initial-message"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <button type="button">carrinho</button>
          </Link>
        </header>

        <ol className="search-section__results">
          {searchResults.results.map((product => <ProductCard key={ product.id } product={ product } />))}
        </ol>
      </section>
    );
  }
}
