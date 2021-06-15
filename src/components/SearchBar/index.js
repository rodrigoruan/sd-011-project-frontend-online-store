import React from 'react';
import styles from './SearchBar.module.css';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <label htmlFor="search-input">
          <i className="fa fa-search">
            <input type="text" name="search-input" id="search-input" />
          </i>
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}
