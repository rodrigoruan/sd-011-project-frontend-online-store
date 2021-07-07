import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Rating.module.css';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className={ style.container }>
        <h1>{ rating.email }</h1>
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
