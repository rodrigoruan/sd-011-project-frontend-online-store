import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';

class StartingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
      inputText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (event) => {};

  handleInput = ({ target }) => {
    this.setState({ inputText: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendSubmit(this.state.inputText);
    this.setState({ shouldRedirect: true });
  };

  render() {
    const { submitChange } = this.props;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to={`/search/${this.state.inputText}`} />;
    }

    return (
      <main className="home-div">
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

export default StartingPage;
