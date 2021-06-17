import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comments extends Component {
  render() {
    const { commentForComponent } = this.props;
    const { email, rating, comment } = commentForComponent;
    return (
      <div>
        <p>{ email }</p>
        <p>{ rating }</p>
        <p>{ comment }</p>
      </div>
    );
  }
}

Comments.propTypes = {
  commentForComponent: {
    email: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string,
  },
}.isRequired;
