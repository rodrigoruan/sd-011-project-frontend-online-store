import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewItem extends Component {
  render() {
    const { productReview } = this.props;
    const { email, message } = productReview;
    return (
      <section>
        <h3>{ email }</h3>
        <p>{ message }</p>
      </section>
    );
  }
}

ReviewItem.propTypes = ({
  email: PropTypes.string,
  message: PropTypes.string,
}).isRequired;
