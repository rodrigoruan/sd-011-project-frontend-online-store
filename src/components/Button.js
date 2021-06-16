import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, innerText } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        data-testid="query-button"
      >
        {innerText}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  innerText: PropTypes.string,
}.isRequired;

export default Button;
