import React from 'react';
import PropTypes from 'prop-types';
import { SearchResults } from '../components';

class Home extends React.Component {
  render() {
    const { updateSearchResults, searchResults } = this.props;

    return (
      <main className="home-container">
        <section id="categories" className="home-one-fourth" />

        <SearchResults
          searchResults={ searchResults }
          updateSearchResults={ updateSearchResults }
        />
      </main>
    );
  }
}
export default Home;

Home.propTypes = {
  searchResults: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
  }).isRequired,
  updateSearchResults: PropTypes.func.isRequired,
};
