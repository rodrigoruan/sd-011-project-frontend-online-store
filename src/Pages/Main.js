import React, { Component } from 'react';
// import ShoppingCart from './ShoppingCart';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    const { addItens, showQtd, actualQtd } = this.props;

    return (
      <>
        <span data-testid="shopping-cart-size">{ actualQtd }</span>
        <Search evSrch={ this.eventSearch } ctgId={ ctgId } />
        <Categorys evCtg={ this.eventCtg } evSrch={ this.eventSearch } />
        <Cards resultSearch={ arraySearch } addItems={ addItens } showQtd={ showQtd } />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      </>
    );
  }
}

Main.propTypes = {
  addItens: PropTypes.func.isRequired,
  showQtd: PropTypes.func.isRequired,
  actualQtd: PropTypes.number.isRequired,
};
