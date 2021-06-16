import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
  render() {
    const { value, name, onClick } = this.props;
    return (
      <div>
        <label htmlFor={ value }>
          <input
            name="categoria"
            data-testid="category"
            type="radio"
            id={ value }
            value={ value }
            onClick={ onClick }
          />
          { name }
        </label>
      </div>
    );
  }
}

Category.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Category.defaultProps = {
  value: '',
  name: '',
};
