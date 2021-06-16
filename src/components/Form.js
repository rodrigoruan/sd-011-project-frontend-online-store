import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      comments: [],
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment() {
    const email = document.querySelector('*[name="email"]');
    const review = document.querySelector('*[name="review"]');
    const comments = document.querySelector('*[name="comments"]');

    const newComment = {
      email: email.value,
      review: review.value,
      text: comments.value,
    };

    this.setState((state) => {
      this.setState({
        comments: [...state.comments, newComment],
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Avaliar</h2>
        <form>
          <div>
            <input
              data-testid="product-detail-evaluation"
              type="email"
              pattern="^[\w_.]{6,}@[a-z]{5,}.com(.br)?$"
              name="email"
              required
            />
            <input type="radio" name="review" value="1" required />
            <input type="radio" name="review" value="2" required />
            <input type="radio" name="review" value="3" required />
            <input type="radio" name="review" value="4" required />
            <input type="radio" name="review" value="5" required />
          </div>
          <div>
            <textarea name="comments" cols="30" rows="10" />
          </div>
          <button type="button" onClick={ this.addComment }>Avaliar</button>
        </form>
      </div>
    );
  }
}
