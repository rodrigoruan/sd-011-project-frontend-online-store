import React from 'react';
import { Route } from 'react-router-dom';
import styles from './SearchBar.module.css';
import CartButton from '../CartButton/index';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <label htmlFor="search-input">
          <i className="fa fa-search">
            <input type="text" name="search-input" id="search-input" />
          </i>
          <Route path="/cart" component={ CartButton }/>
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}
