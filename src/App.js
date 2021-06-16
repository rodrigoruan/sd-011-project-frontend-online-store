import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SearchBarProducts from './components/SearchBarProducts';
import AllProducts from './components/AllProducts';
import { getProductsFromCategoryAndQuery } from './services/api';
import Button from './components/Button';
import cartPage from './pages/CartPage';

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
          <Route exact path="/" render={ () => <Home /> } />
          <Route path="/cart" component={ cartPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
