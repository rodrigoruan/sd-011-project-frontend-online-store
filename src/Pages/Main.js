import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Search from '../component/Search';
import Categorys from '../component/Categorys';
import Cards from '../component/Cards';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Main extends Component {
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
      <>
        <Search evSrch={ this.eventSearch } ctgId={ ctgId } />
        <ShoppingCart />
        <Categorys evCtg={ this.eventCtg } />
        <Cards resultSearch={ arraySearch } />
      </>
    );
  }
}
