import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadialButton extends Component {
  render() {
    const { category: { name }, onClick, value } = this.props;
    return (
      <button
        type="button"
        data-testid="category"
        className="category"
        onClick={ onClick }
        name="category"
        value={ value }
      >
        { name }
      </button>
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
