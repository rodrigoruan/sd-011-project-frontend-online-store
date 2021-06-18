import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';
import Search from '../component/Search';
import Categorys from '../component/Categorys';
import Cards from '../component/Cards';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Main extends Component {
  constructor(props) {
    super(props);
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
    const { itensAdded, addItens, remove, actualValue, ShowQuantity } = this.props;
    return (
      <>
        <ShoppingCart itensArray={ itensAdded } addItens={ addItens } remove={ remove } actualValue={ actualValue } ShowQuantity={ ShowQuantity } />
        <Search evSrch={ this.eventSearch } ctgId={ ctgId } />
        <Categorys evCtg={ this.eventCtg } />
        <Cards resultSearch={ arraySearch } addItems={ addItens } />
      </>
    );
  }
}

Main.propTypes = {
  itensAdded: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItens: PropTypes.func.isRequired,
};
