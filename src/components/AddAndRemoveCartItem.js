import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddAndRemoveCartItem extends Component {
  render() {
    const { dataTestId, operator, increase, decrease } = this.props;

    if (operator === '-') {
      return (
        <button
          data-testid={ dataTestId }
          type="button"
          onClick={ decrease }
        >
          -
        </button>
      );
    }

    return (
      <button
        data-testid={ dataTestId }
        type="button"
        onClick={ increase }
      >
        +
      </button>
    );
  }
}

AddAndRemoveCartItem.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};
