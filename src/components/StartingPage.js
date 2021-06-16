import React, { Component } from 'react';
import '../Componentscss/StartingPage.css';
import { Link } from 'react-router-dom';

class StartingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = ({ target }) => {
    this.setState({ inputText: target.value });
  };

  handleSubmit = (event) => {
    this.props.sendSubmit(this.state.inputText);
    event.preventDefault();
  };

  render() {
    const { submitChange } = this.props;

    return (
      <div className="Home-css">
        <form action="submit">
          {/* <img className="img" src={img} alt="logo lupa" /> */}
          <input className="inputs-style" type="text" onChange={this.handleInput} />
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <button
            data-testid="query-button"
            type="submit"
            value="submit"
            onClick={this.handleSubmit}
          >
            <Link to={`/search:${this.state.inputText}`}>Buscar</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default StartingPage;
