import React, { Component } from 'react';

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0,
      comment: '',
      email: '',
    };
    this.rate = this.rate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  rate({ target }) {
    const { id } = target;
    this.setState({ rate: id });
  }

  render() {
    const { rate, comment, email } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={ this.onChange }
            value={ email }
          />
          <button type="button" id="1" onClick={ this.rate }>O</button>
          <button type="button" id="2" onClick={ this.rate }>O</button>
          <button type="button" id="3" onClick={ this.rate }>O</button>
          <button type="button" id="4" onClick={ this.rate }>O</button>
          <button type="button" id="5" onClick={ this.rate }>O</button>
          <p id="rating">{ rate }</p>
          <textarea
            maxLength="200"
            name="comment"
            onChange={ this.onChange }
            value={ comment }
          />
          <button type="button">Enviar</button>
        </form>
      </div>
    );
  }
}
