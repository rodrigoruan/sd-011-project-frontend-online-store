import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div>
        <label htmlFor="category">
          <input name="category" data-testid="category" type="radio" key={ id } />
          { name }
        </label>
      </div>
    );
  }
}

Category.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

Category.defaultProps = {
  id: '',
  name: '',
};
