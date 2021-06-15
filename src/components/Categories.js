import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { value } = this.props;
    return (
      <div data-testid="category">
        <label htmlFor={ value }>
          <input type="radio" value={ value } name={ value } />
          { value }
        </label>
      </div>
    );
  }
}

Categories.propTypes = {
  value: PropTypes.string.isRequired,
};
