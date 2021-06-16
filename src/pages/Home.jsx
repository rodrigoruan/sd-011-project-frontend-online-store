import React from 'react';
import PropTypes from 'prop-types';
import { Categories, SearchResults } from '../components';

class Home extends React.Component {
  render() {
    const { categories, updateSearchResults, searchResults } = this.props;

    return (
      <main className="home-container">
        <Categories categories={ categories } />
        <SearchResults
          searchResults={ searchResults }
          updateSearchResults={ updateSearchResults }
        />
      </main>
    );
  }
}

Home.propTypes = {
  searchResults: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
  }).isRequired,
  updateSearchResults: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default Home;
