import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>{ rating.email }</p>
        <p>{ rating.rate }</p>
        { rating.comment && (
          <p>{ rating.comment }</p>
        )}
      </div>
    );
  }
}

Comment.propTypes = {
  rating: PropTypes.objectOf(String).isRequired,
};

export default Comment;
