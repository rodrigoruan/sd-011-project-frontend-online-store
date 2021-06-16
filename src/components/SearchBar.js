import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import Categories from './Categories';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
      inputText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = ({ target }) => {
    this.setState({ inputText: target.value });
  };

  handleSubmit = (event) => {
    const { inputText } = this.state;
    event.preventDefault();
    this.props.sendSubmit(inputText);
    this.setState({ shouldRedirect: true });
  };

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to={`/search/${this.state.inputText}`} />;
    }

    return (
      <main className="home-div">
        <aside></aside>
        <form className="home-form-div" onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              data-testid="query-input"
              type="search"
              className="form-control form-control-lg"
              type="text"
              onChange={this.handleInput}
              placeholder="ex: gato"
              onKeyPress={this.handleKeyPress}
            />
            <h2 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h2>
          </fieldset>
          <button data-testid="query-button" type="submit" className="btn btn-success">
            Buscar
          </button>
        </form>
      </main>
    );
  }
}
