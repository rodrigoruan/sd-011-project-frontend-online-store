import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';

export default class ReviewList extends Component {
  render() {
    let allProductsReviews = localStorage.getItem('reviews');
    let productReviews = [];
    const { productId } = this.props;

    if (allProductsReviews) {
      allProductsReviews = JSON.parse(allProductsReviews);
      if (allProductsReviews[productId]) {
        productReviews = [...allProductsReviews[productId]];
      }
    }

    const productReviewsList = productReviews.map((review, index) => (
      <ReviewItem key={ index } productReview={ review } />
    ));

    return (
      productReviewsList.length === 0
        ? <span>Esse produto ainda não possui avaliações!</span>
        : <section>{ productReviewsList }</section>
    );
  }
}

ReviewList.propTypes = {
  productId: PropTypes.string.isRequired,
};
