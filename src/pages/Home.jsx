import React from 'react';
import PropTypes from 'prop-types';
import { Categories, SearchResults, Header } from '../components';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategoryFilter: '',
      searchTerm: '',
    };
    this.filterCategory = this.filterCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const { updateSearchResults } = this.props;
    const { searchTerm, currentCategoryFilter } = this.state;

    api.getProductsFromCategoryAndQuery(currentCategoryFilter, searchTerm)
      .then((result) => updateSearchResults(result))
      .catch((err) => console.error(err));
  }

  handleChangeField(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  filterCategory(e) {
    const { target } = e;
    this.setState(({ currentCategoryFilter }) => {
      const { id } = target.dataset;
      return {
        currentCategoryFilter: (currentCategoryFilter !== id) ? id : '',
      };
    }, () => this.handleSearch(e));
  }

  render() {
    const { addItemToCart,
      categories,
      updateSearchResults,
      searchResults,
      totalItemCount } = this.props;
    const { currentCategoryFilter, searchTerm } = this.state;
    return (
      <>
        <Header showCartButton totalItemCount={ totalItemCount } />
        <main className="home-container">
          <Categories
            handleSearch={ this.handleSearch }
            filterCategory={ this.filterCategory }
            categories={ categories }
            currentCategoryFilter={ currentCategoryFilter }
          />
          <SearchResults
            searchTerm={ searchTerm }
            handleSearch={ this.handleSearch }
            handleChangeField={ this.handleChangeField }
            searchResults={ searchResults }
            updateSearchResults={ updateSearchResults }
            currentCategoryFilter={ currentCategoryFilter }
            addItemToCart={ addItemToCart }
          />
        </main>
      </>
    );
  }
}

Home.propTypes = {
  searchResults: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }),
  updateSearchResults: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  addItemToCart: PropTypes.func,
  totalItemCount: PropTypes.number,
}.isRequired;

export default Home;
