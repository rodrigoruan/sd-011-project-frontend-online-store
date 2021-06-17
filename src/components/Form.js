import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rating: 0,
      comment: '',
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment() {

  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="Insira seu e-mail"
              required
            />
          </label>
          <label htmlFor="rating">
            <input
              id="rating"
              type="number"
              min="1"
              max="5"
              required
            />
          </label>
          <label htmlFor="comment">
            <textarea
              id="comment"
              placeholder="Insira seu comentário"
            />
          </label>
          <button type="button">Avaliar</button>
        </form>
        <Comments comment={ this.state } />
      </div>

    );
  }
}
