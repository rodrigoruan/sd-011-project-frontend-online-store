import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListComments from './ListComments';

export default class Comments extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      comment: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { addComment, comments } = this.props;
    const { email, comment } = this.state;
    return (
      <div>
        <h2>Avaliar</h2>
        <form>
          <div>
            <input
              type="email"
              pattern="^[\w_.]{6,}@[a-z]{5,}.com(.br)?$"
              name="email"
              onChange={ this.onChange }
              value={ email }
              required
            />
            <input
              type="radio"
              name="review"
              value="1"
              onChange={ this.onChange }
              required
            />
            <input
              type="radio"
              name="review"
              value="2"
              onChange={ this.onChange }
              required
            />
            <input
              type="radio"
              name="review"
              value="3"
              onChange={ this.onChange }
              required
            />
            <input
              type="radio"
              name="review"
              value="4"
              onChange={ this.onChange }
              required
            />
            <input
              type="radio"
              name="review"
              value="5"
              onChange={ this.onChange }
              required
            />
          </div>
          <div>
            <textarea
              data-testid="product-detail-evaluation"
              name="comment"
              cols="30"
              rows="10"
              value={ comment }
              onChange={ this.onChange }
            />
          </div>
          <button
            className="btn-items btn-checkout"
            type="button"
            onClick={ () => addComment(this.state) }
          >
            Avaliar
          </button>
        </form>
        <ListComments comments={ comments } />
      </div>
    );
  }
}

Comments.propTypes = {
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
