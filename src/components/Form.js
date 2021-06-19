import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      comment: [],
    };
    this.addComment = this.addComment.bind(this);
    this.sortComment = this.sortComment.bind(this);
  }

  addComment({ target }) {
    const { idProduct } = this.props;
    console.log(idProduct);
    const teste = target.parentElement.children;
    const commentForState = {
      email: teste[0].firstChild.value,
      rating: parseFloat(teste[1].firstChild.value),
      comment: teste[2].firstChild.value,
    };

    this.setState((prevValue) => ({
      comment: [...prevValue.comment, commentForState],
    }));

    const { comment } = this.state;
    localStorage.setItem(JSON.stringify(idProduct), JSON.stringify(comment));
  }

  sortComment() {
    const { comment } = this.state;
    const sortComments = {
      firstComment: -1,
      lastComment: 1,
      midComment: 0,
    };
    const { firstComment, lastComment, midComment } = sortComments;
    comment.sort((a, b) => {
      if (a.rating > b.rating) {
        return firstComment;
      }
      if (a.rating < b.rating) {
        return lastComment;
      }
      return midComment;
    });
  }

  render() {
    const { comment } = this.state;
    const { idProduct } = this.props;
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
              placeholder="✓"
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
              data-testid="product-detail-evaluation"
            />
          </label>
          <button
            type="button"
            onClick={ this.addComment }
          >
            Avaliar
          </button>
        </form>
        { this.sortComment() }
        { comment.map((commentForComponent) => (<Comments
          commentForComponent={ commentForComponent }
          key={ `${commentForComponent.email}: ${idProduct}` }
        />)) }
      </div>
    );
  }
}

Form.propTypes = {
  idProduct: PropTypes.string.isRequired,
};
