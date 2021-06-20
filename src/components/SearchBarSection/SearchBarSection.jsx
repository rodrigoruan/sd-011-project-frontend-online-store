import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './SearchBarSection.module.css';

export default class SearchBarSection extends Component {
  render() {
    const { fetchByQuery, handleInput, searchQuery } = this.props;
    return (
      <div className={ styles.SearchBarContainer }>
        <input
          type="text"
          name="searchQuery"
          value={ searchQuery }
          onChange={ handleInput }
          placeholder="busque seu produto aqui"
          data-testid="query-input"
        />

        <button
          type="button"
          onClick={ fetchByQuery }
          data-testid="query-button"
        >
          Enviar
        </button>

        <Link to="/cart" className={ styles.CartLink } data-testid="shopping-cart-button">
          <img src="/shopping_cart_black_24dp.svg" alt="Carrinho de compras" />
        </Link>
      </div>
    );
  }
}

SearchBarSection.propTypes = {
  fetchByQuery: PropTypes.func,
  handleInput: PropTypes.func,
  searchQuery: PropTypes.string,
}.isRequired;
