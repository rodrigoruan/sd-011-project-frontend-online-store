import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SideBar extends Component {
  render() {
    const { categories, onChangeHandler } = this.props;
    return (
      <aside>
        <ul>
          { categories.map((category) => (
            <label htmlFor="category" key={ category.id }>
              { category.name }
              <input
                type="radio"
                name="category"
                data-testid="category"
                value={ category.id }
                onChange={ onChangeHandler }
              />
            </label>
          ))}
        </ul>
      </aside>
    );
  }
}

SideBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
