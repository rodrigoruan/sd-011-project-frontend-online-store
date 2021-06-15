import React, { Component } from 'react';
import Filtros from './Filtros';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <Filtros />
        </h2>
      </div>
    );
  }
}
