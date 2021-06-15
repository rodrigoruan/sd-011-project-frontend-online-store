import React, { Component } from 'react';
import CategorieList from './CategorieList';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <CategorieList />
      </div>
    );
  }
}
