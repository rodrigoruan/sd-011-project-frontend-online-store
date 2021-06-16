import React, { Component } from 'react';
import './App.css';
import ShoppingCart from './Pages/ShoppingCart';
import Search from './component/Search';
import Categorys from './component/Categorys';
import Cards from './component/Cards';
import { getProductsFromCategoryAndQuery } from './services/api';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      arraySearch: [],
      ctgId: '',
    };
    this.eventSearch = this.eventSearch.bind(this);
    this.eventCtg = this.eventCtg.bind(this);
    this.defaultSearch = this.defaultSearch.bind(this);
  }

  componentDidMount() {
    this.defaultSearch();
  }

  async defaultSearch() {
    const { results } = await getProductsFromCategoryAndQuery('MLB1953', '');
    this.setState({
      arraySearch: results,
    });
  }

  eventSearch(obj) {
    this.setState({ arraySearch: obj });
  }

  eventCtg(value) {
    this.setState({
      ctgId: value,
    });
  }

  render() {
    const { arraySearch, ctgId } = this.state;
    return (
      <div className="App">
        <Search evSrch={ (value) => this.eventSearch(value) } ctgId={ ctgId } />
        <ShoppingCart />
        <Categorys evCtg={ (value) => this.eventCtg(value) } />
        <Cards resultSearch={ arraySearch } />
      </div>
    );
  }
}
