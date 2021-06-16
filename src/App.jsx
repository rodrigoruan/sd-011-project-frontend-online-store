import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import * as api from './services/api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: { results: [] },
      categories: [],
    };

    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  componentDidMount() {
    this.defineStateCategories();
  }

  async defineStateCategories() {
    try {
      const categories = await api.getCategories();
      this.setState({ categories });
    } catch (err) {
      console.error(err);
    }
  }

  updateSearchResults(searchResults) {
    this.setState({ searchResults });
  }

  render() {
    const { categories, searchResults } = this.state;

    return (
      <>
        <header>Frontend Online Store</header>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (<Home
                searchResults={ searchResults }
                updateSearchResults={ this.updateSearchResults }
                categories={ categories }
              />) }
            />
            <Route path="/cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
        <footer>Feito pelo Grupo 14, o grupo brabo</footer>
      </>
    );
  }
}

export default App;
