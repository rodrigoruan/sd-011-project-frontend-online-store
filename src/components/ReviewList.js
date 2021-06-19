import React, { Component } from 'react';
import ReviewItem from './ReviewItem';

export default class ReviewList extends Component {
  render() {
    let allProductsReviews = localStorage.getItem('reviews');
    let productReviews = [];
    const { productId } = this.props;

    if(allProductsReviews) {
      allProductsReviews = JSON.parse(allProductsReviews);
      productReviews = [...allProductsReviews[productId]];
    }
    return (
      <section>
        {
          productReviews.map((obj, index) => (
              <li key={ index }>
                <ReviewItem productReview={ obj } />
              </li>
            )
          )
        }
        <h1>oi =D</h1>
      </section>
    );
  }
};
