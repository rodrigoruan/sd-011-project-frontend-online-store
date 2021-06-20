import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './NavBar.module.css';

export default class NavBar extends Component {
  render() {
    const { name, id, selectCategory } = this.props;
    console.log(id);
    return (
      <div>
        <button
          className={ styles.categoryButton }
          data-testid="category"
          type="button"
          name="categoryRadio"
          id={ id }
          onClick={ selectCategory }
        >
          {name}
        </button>
      </div>
    );
  }
}

NavBar.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  selectCategory: PropTypes.func,
}.isRequired;
