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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  componentDidMount() {
    const { inputText } = this.state;
    if (inputText) {
      this.getQuery(inputText);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputText, radioFilter, loading } = this.state;
    if (prevState.loading !== loading || prevState.radioFilter !== radioFilter) {
      this.getQuery(radioFilter.id, inputText);
    }
  }

  getQuery = async (category, product) => {
    const getList = await api.getProductsFromCategoryAndQuery(category, product);
    return this.setState({ products: getList.results });
  };

  handleInput = ({ target }) => {
    this.setState({ inputText: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.sendSubmit(inputText);
    this.setState({ loading: false });
  };

  handleRadioClick = ({ target }) => {
    const categoryObj = { id: target.id, name: target.name };
    this.setState({ radioFilter: categoryObj });
  };

  showResults = () => {
    const { loading, products } = this.state;
    if (!loading) return <SearchList products={ products } />;
  };

  render() {
    return (
      <div className="home-div">
        <SearchInput handleSubmit={this.handleSubmit } handleInput={ this.handleInput } />
        <div className="search-results">
          <Categories handleRadioClick={ this.handleRadioClick } />
          {this.showResults()}
        </div>
      </div>
    );
  }
}
