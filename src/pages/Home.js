import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };
  }

  componentDidUpdate() {}

  setQuery = () => {
    this.setState({ searchQuery: this.state.searchQuery });
  };

  render() {
    return (
      <div className="home-div">
        <Categories />
        <SearchBar sendSubmit={this.props.sendSubmit} />
      </div>
    );
  }
}
