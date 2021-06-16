import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState(({ [name]: value }));
  }

  render() {
    const { query } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <input
          type="text"
          name="query"
          id="inpQuery"
          value={ query }
          onChange={ this.handleOnChange }
          data-testid="query-input"
        />
        <button
          type="button"
          name="query"
          id="butQuery"
          value={ query }
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Input;
