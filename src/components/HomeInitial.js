import React, { Component } from 'react';

class HomeInitial extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search-bar">
            <input type="text" placeholder="Search" id="search-bar" />
          </label>
        </form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Filter />
      </div>
    );
  }
}

export default HomeInitial;
