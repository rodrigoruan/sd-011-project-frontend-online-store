import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  deleteButtonAvaliation(avaliationId) {
    if (avaliationId > 0) {
      return (
        <div>
          <button
            type="button"
            onClick={ this.deleteAvaliation }
          >
            Delete Comment
          </button>
        </div>
      );
    }
  }

  deleteAvaliation() {
    // implementar função de deletar aqui
  }

  render() {
    const { customerEmail,
      customerRating,
      customerCommentValue,
      avaliationId } = this.props;

    return (
      <div>
        <p>{ customerEmail }</p>
        <p>{ customerRating }</p>
        <p>{ customerCommentValue }</p>
        { this.deleteButtonAvaliation(avaliationId) }
      </div>
    );
  }
}

Comment.defaultProps = {
  customerRating: null,
};

Comment.propTypes = {
  customerEmail: PropTypes.string.isRequired,
  customerRating: PropTypes.number,
  customerCommentValue: PropTypes.string.isRequired,
  avaliationId: PropTypes.number.isRequired,
};

export default Comment;
