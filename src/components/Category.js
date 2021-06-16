import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <div>
        <label htmlFor="categoria">
          <input
            name="categoria"
            data-testid="category"
            type="radio"
            id={ value }
            value={ value }
            onChange={ onChange }
          />
          { name }
        </label>
      </div>
    );
  }
}

Category.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
};

Category.defaultProps = {
  key: '',
  name: '',
};
