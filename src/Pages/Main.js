import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';
import Search from '../component/Search';
import Categorys from '../component/Categorys';
import Cards from '../component/Cards';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      arraySearch: [],
      ctgId: '',
    };
    this.eventSearch = this.eventSearch.bind(this);
    this.eventCtg = this.eventCtg.bind(this);
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
    const { itensAdded, addItens } = this.props;
    return (
      <>
        <Search evSrch={ this.eventSearch } ctgId={ ctgId } />
        <Categorys evCtg={ this.eventCtg } evSrch={ this.eventSearch } />
        <Cards resultSearch={ arraySearch } addItems={ addItens } />
        <ShoppingCart itensArray={ itensAdded } />
      </>
    );
  }
}

Main.propTypes = {
  itensAdded: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItens: PropTypes.func.isRequired,
};
