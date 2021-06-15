import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SearchBarProducts from './components/SearchBarProducts';
import AllProducts from './components/AllProducts';
import { getProductsFromCategoryAndQuery } from './services/api';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchValue: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProducts(query) {
    const result = await getProductsFromCategoryAndQuery('', query);
    const products = result.results;
    console.log(products);
    this.setState({
      products,
    });
  }

  render() {
    const { searchValue, products } = this.state;
    return (
      <BrowserRouter>
        <SearchBarProducts value={ searchValue } onChange={ this.handleSearch } />
        <Button onClick={ () => this.fetchProducts(searchValue) } innerText="Buscar" />
        <AllProducts productsList={ products } />
        <Switch>
          <Route path="/" render={ () => <Home /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
