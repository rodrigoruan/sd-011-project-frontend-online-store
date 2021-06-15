import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '.'; 

export default class SearchResults extends React.Component {
  render() {
    const { searchResults } = this.props;

    return (
      <section id="home-search" className="home-two-fourths search-section">
        <header className="search-section__header">
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
