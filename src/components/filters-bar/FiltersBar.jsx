import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './filter-bar.css';

export default class FiltersBar extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="filter-container">
        <form action="">
          { categories.map(({ id, name }) => (
            <label data-testid="category" key={ id } htmlFor={ id }>
              <input type="checkbox" name={ name } id={ id } />
              { name }
            </label>
          )) }
        </form>
      </div>
    );
  }
}

FiltersBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};
