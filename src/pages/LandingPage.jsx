import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardList from '../components/CardList';
import * as fetchApi from '../services/api';
import Categories from '../components/Categories';
import carrinho from '../images/carrinho.png';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
      query: '',
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick({ target: { id = '' } }) {
    const { query } = this.state;
    fetchApi.getProductsFromCategoryAndQuery(id, query).then((produtos) => this.setState({
      cardList: produtos,
    }));
  }

  onChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { cardList } = this.state;
    const { getProductDetails, quantityIcon, updateQuantityIcon } = this.props;
    return (
      <div data-testid="home-initial-message">
        <span>Digite algum termo de pesquisa ou escolha uma categoria.</span>
        <input
          onChange={ this.onChange }
          type="text"
          data-testid="query-input"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.onClick }
        >
          Pesquisar
        </button>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ carrinho } alt="carrinho" />
          <span data-testid="shopping-cart-size">{ quantityIcon }</span>
        </Link>
        <CardList
          list={ cardList.results }
          getProductDetails={ getProductDetails }
          updateQuantityIcon={ updateQuantityIcon }
        />
        <Categories onClick={ this.onClick } />
      </div>
    );
  }
}

LandingPage.propTypes = {
  getProductDetails: PropTypes.func.isRequired,
  quantityIcon: PropTypes.number.isRequired,
  updateQuantityIcon: PropTypes.func.isRequired,
};

export default LandingPage;
