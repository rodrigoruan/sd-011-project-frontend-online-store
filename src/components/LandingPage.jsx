import React from 'react';
import { Link } from 'react-router-dom';
import CardList from './cardList';
import * as fetchApi from '../services/api';
import Categories from './Categories';
import carrinho from '../carrinho.png';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
      query: '',
      selectedCategory: '',
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickCategory = this.onClickCategory.bind(this);
  }

  onClickCategory(event) {
    const { target: { id } } = event;
    this.setState({ selectedCategory: id });
    this.setState((previousState) => {
      cardList: previousState.cardList.results.filter((card)=> card.product_id === previousState.selectedCategory)
    } )
  }

  onClick() {
    const { query } = this.state;
    fetchApi.getProductsFromCategoryAndQuery('', query).then((produtos) => this.setState({
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
    return (
      <div data-testid="home-initial-message">
        <input
          onChange={ this.onChange }
          type="text"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
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
        </Link>
        <CardList list={ cardList.results } />
        <Categories onClick={ this.onClickCategory } />
      </div>
    );
  }
}

export default LandingPage;
