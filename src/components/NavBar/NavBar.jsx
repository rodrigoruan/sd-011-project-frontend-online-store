import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NavBar extends Component {
  render() {
    const { name, id, selectCategory } = this.props;
    console.log(id);
    return (
      <div>
        <input
          type="radio"
          name="categoryRadio"
          id={ id }
          onChange={ selectCategory }
        />
        <label htmlFor="categoryRadio" data-testid="category">
          {name}
        </label>
      </div>
    );
  }
}

NavBar.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  selectCategory: PropTypes.func,
}.isRequired;
