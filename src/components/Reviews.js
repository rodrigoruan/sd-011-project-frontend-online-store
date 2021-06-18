import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reviews extends Component {
  getReviews = () => {
    const reviewsInStorage = JSON.parse(localStorage.getItem('allReviews')) || [];
    return reviewsInStorage;
  }

  renderReviews = () => {
    const localStorage = this.getReviews();
    const { props } = this;
    const productReviews = localStorage.filter((review) => review.id === props.id);

    return (
      productReviews.map(({ email, stars, comment }, index) => (
        <section key={ index } className="inputs-space">
          <h4>{`Email: ${email}`}</h4>
          <h4>{`Stars: ${stars}`}</h4>
          <p>{`Comment: ${comment}`}</p>
        </section>
      ))
    );
  }

  render() {
    return (
      <section className="evaluation-form">
        <h2 className="form-title">Reviews</h2>
        <section className="form-space">
          { this.renderReviews() }
        </section>
      </section>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.string,
};

Reviews.defaultProps = {
  id: 'productID',
};

export default Reviews;
