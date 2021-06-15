import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadialButton extends Component {
  render() {
    const { category: { name } } = this.props;
    return (
      <label htmlFor="category">
        { name }
        <input data-testid="category" type="radio" />
      </label>
    );
  }
}

RadialButton.propTypes = {
  category: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default RadialButton;
