import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListComments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map(({ email, review, comment }, key) => (
          <div key={ key }>
            <span>{email}</span>
            <span>{review}</span>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    );
  }
}

ListComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    review: PropTypes.number,
    comment: PropTypes.string,
  })).isRequired,
};
