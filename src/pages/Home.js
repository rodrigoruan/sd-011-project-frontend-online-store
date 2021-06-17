import React, { Component } from 'react';
import { Categories, SearchInput } from '../components/zComponentsMenu';
import SearchList from './SearchList';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      inputText: '',
      products: '',
      radioFilter: '',
      categories: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.showResults = this.showResults.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getQuery();
    this.getCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    const { radioFilter, loading } = this.state;
    if (prevState.loading !== loading || prevState.radioFilter !== radioFilter) {
      this.getQuery();
    }
  }

  handleInput = ({ target }) => {
    this.setState({ inputText: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: false });
    this.getQuery();
  };

  handleRadioClick = ({ target }) => {
    const categoryObj = { id: target.id, name: target.name };
    this.setState({ radioFilter: categoryObj });
  };

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  async getQuery() {
    const { radioFilter, inputText } = this.state;
    const getList = await api.getProductsFromCategoryAndQuery(radioFilter.id, inputText);
    return this.setState({ products: getList.results });
  }

  showResults = () => {
    const { handleAddToCart } = this.props;
    const { loading, products } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (!loading) return <SearchList products={products} handleAddToCart={handleAddToCart} />;
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="home-div">
        <SearchInput handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
        <div className="search-results">
          <Categories handleRadioClick={this.handleRadioClick} categories={categories} />
          {this.showResults()}
        </div>
      </div>
    );
  }
}
