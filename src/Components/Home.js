import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchBar: '',
    };
  }

  render() {
    const { searchBar } = this.state;
    return (
      <div>
        <label htmlFor="searchBar" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            value={ searchBar }
            name="searchBar"
          />
        </label>
      </div>
    );
  }
}

export default Home;
