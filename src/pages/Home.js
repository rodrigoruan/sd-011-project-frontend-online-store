import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Categories, SearchInput } from '../components/zComponentsMenu';
import SearchList from './SearchList';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      inputText: '',
      products: [],
      categories: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    const { loading } = this.state;
    if (prevState.loading !== loading) {
      this.getQuery();
    }
  }

  handleInput = ({ target }) => {
    this.setState({ inputText: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getQuery();
  };

  handleRadioClick = ({ target }) => {
    const categoryObj = { id: target.id, name: target.name };
    this.getQuery(categoryObj);
  };

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  async getQuery(radioFilter) {
    const { inputText } = this.state;
    const filterString = radioFilter ? radioFilter.id : '';
    const getList = await api.getProductsFromCategoryAndQuery(filterString, inputText);
    this.setState({ products: getList.results, loading: false });
  }

  render() {
    const { handleAddToCart } = this.props;
    const { categories, products } = this.state;
    return (
      // prettier-ignore
      <div className="home-div">
        <SearchInput
          handleSubmit={ this.handleSubmit }
          handleInput={ this.handleInput }
        />
        <div className="search-results">
          <Categories
            handleRadioClick={ this.handleRadioClick }
            categories={ categories }
          />
          <SearchList products={ products } handleAddToCart={ handleAddToCart } />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  handleAddToShopCart: PropTypes.func,
  shopCart: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
}.isRequired;
