import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { value } = target;
    this.setState({
      userInput: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { userInput } = this.state;
    return (
      <label htmlFor="busca">
        <input
          name="inputText"
          data-testid="query-input"
          type="text"
          placeholder="Faça sua pesquisa"
          value={ userInput }
          onChange={ this.handleState }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => onClick(userInput) }
        >
          Buscar
        </button>
      </label>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = ({
  handleState: PropTypes.func,
}).isRequired;
