import React, { Component } from 'react';
import { Categories, SearchInput } from '../components/zComponentsMenu';
import SearchList from '../pages/SearchList';
import * as api from '../services/api';
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      inputText: [],
      products: '',
      radio: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  getQuery = async (category, product) => {
    const getList = await api.getProductsFromCategoryAndQuery(category, product);
    return this.setState({ products: getList.results });
  };

  componentDidMount() {
    const { searchQuery } = this.props;
    if (searchQuery) {
      this.getQuery(searchQuery);
    }
  }

  componentDidUpdate() {
    const { searchQuery, radioFilter } = this.props;
    if (searchQuery || radioFilter) {
      this.getQuery(radioFilter, searchQuery);
    }
  }

  handleInput = ({ target }) => {
    this.setState({ inputText: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { inputText } = this.state;
    this.props.sendSubmit(inputText);
    this.setState({ loading: false });
  };

  handleRadioClick = ({ target }) => {
    this.props.sendRadio(target.value);
  };

  showCategory = () => {
    if (!this.state.loading)
      return (
        <>
          <Categories handleRadioClick={this.handleRadioClick} />
          <SearchList products={this.state.products} />
        </>
      );
  };

  render() {
    return (
      <div className="home-div">
        <SearchInput handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
        <div className="search-results">{this.showCategory()}</div>
      </div>
    );
  }
}
