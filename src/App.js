import './App.css';
import './Componentscss/searchlist.css';
import React, { Component } from 'react';
import * as api from './services/api';
import Home from './components/StartingPage';
import SearchList from './components/SearchList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };

    this.getSearchQuery = this.getSearchQuery.bind(this);
  }

  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
  }

  getSearchQuery = (value) => {
    this.setState({ searchQuery: value });
  };

  render() {
    return (
      <BrowserRouter className="App">
        {/* <Home sendSubmit={this.getSearchQuery} /> */}
        <Switch>
          <Route
            path="/"
            render={(props) => <Home {...props} sendSubmit={this.getSearchQuery} />}
            exact
          />
          <Route
            path="/search:id"
            render={(props) => (
              <SearchList
                {...props}
                sendSubmit={this.getSearchQuery}
                product={this.state.searchQuery}
              />
            )}
            exact
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
