import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>{ rating.email }</p>
        <p>{ rating.rating }</p>
        <p>{ rating.comment}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.shape({
    email: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string,
  }),
}.isRequired;

export default Rating;
