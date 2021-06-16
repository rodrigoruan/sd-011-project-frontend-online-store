import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
