import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  constructor(props) {
    super(props);
    const { email, msg, rating } = this.props;
    this.state = {
      email,
      message: msg,
      rating,
    };
  }

  render() {
    const { email, message, rating } = this.state;
    return (
      <div>
        <p>{ email }</p>
        <p>{ message }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  email: PropTypes.string,
  message: PropTypes.string,
  rating: PropTypes.number,
}.isRequired;

export default Rating;
