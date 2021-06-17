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
      itensAdded: [],
    };
    this.eventSearch = this.eventSearch.bind(this);
    this.eventCtg = this.eventCtg.bind(this);
    this.defaultSearch = this.defaultSearch.bind(this);
    this.addItens = this.addItens.bind(this);
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

  addItens(obj) {
    const { itensAdded } = this.state;
    this.setState({
      itensAdded: [...itensAdded, obj],
    });
  }

  render() {
    const { arraySearch, ctgId, itensAdded } = this.state;
    return (
      <>
        <Search evSrch={ this.eventSearch } ctgId={ ctgId } />
        <Categorys evCtg={ this.eventCtg } />
        <Cards resultSearch={ arraySearch } addItems={ this.addItens } />
        <ShoppingCart itensArray={ itensAdded } />
      </>
    );
  }
}
