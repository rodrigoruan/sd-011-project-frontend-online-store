import React, { Component } from 'react';
import Categories from '../components/Categories';
import SearchInput from '../components/SearchInput';
import SearchList from '../pages/SearchList';
import * as api from '../services/api';
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      inputText: [],
      products: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  getQuery = async (product) => {
    const getList = await api.getProductsFromCategoryAndQuery('MLB1071', product);
    return this.setState({ products: getList.results });
  };

  componentDidMount() {
    const { searchQuery } = this.props;
    if (searchQuery) {
      this.getQuery(searchQuery);
    }
  }

  componentDidUpdate() {
    const { searchQuery } = this.props;
    if (searchQuery) {
      this.getQuery(searchQuery);
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

  render() {
    return (
      <div className="home-div">
        <SearchInput handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
        <div class="search-results">
          <Categories />  
          <SearchList products={this.state.products} />
        </div>
      </div>
    );
  }
}
