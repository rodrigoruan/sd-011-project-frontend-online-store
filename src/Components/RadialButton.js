import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadialButton extends Component {
  render() {
    const { category: { name }, onClick, value } = this.props;
    return (
      <label className="category" htmlFor="category">
        { name }
        <input
          data-testid="category"
          onClick={ onClick }
          name="category"
          type="radio"
          value={ value }
        />
      </label>
    );
  }
}

RadialButton.propTypes = {
  category: PropTypes.shape(PropTypes.arrayOf({
    name: PropTypes.string,
  })).isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RadialButton;
