import React from 'react';
import CardList from './cardList';
import * as fetchApi from '../services/api';

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
        <CardList list={ cardList.results } />
      </div>
    );
  }
}

export default LandingPage;
