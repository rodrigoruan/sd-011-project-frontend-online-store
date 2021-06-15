import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api'

class HomeInitial extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      search: 'a',
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  

  onChange(event) {
    const value = event.target.value;
    this.setState({
      search: value,
    })
  }

  onClick() {
    const { search } = this.state;
    console.log((getProductsFromCategoryAndQuery(undefined ,search)));
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="search-bar">
            <input type="text" data-testid="query-input" placeholder="Search" id="search-bar" onChange={ this.onChange } />
          </label>
          <button data-testid="query-button" onClick={ this.onClick } type="button">Buscar</button>
        </form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default HomeInitial;
