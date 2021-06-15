import React, { Component } from 'react';
import CategoryBar from './CategoryBar';

class Home extends Component {
  render() {
    return (
      <div>
        <CategoryBar />
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
