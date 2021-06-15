import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: {},
    };

    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  updateSearchResults(searchResults) {
    this.setState({ searchResults });
  }

  render() {
    const { searchResults } = this.state;

    return (
      <>
        <header>Frontend Online Store</header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => 
              <Home searchResults={ searchResults } updateSearchResults={ this.updateSearchResults } /> } 
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
