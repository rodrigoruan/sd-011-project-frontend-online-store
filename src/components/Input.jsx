import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <input
          type="text"
          name="query"
          id="inpQuery"
          value={ value }
          onChange={ onChange }
        />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
