import React, { Component } from 'react';
import ReviewItem from './ReviewItem';

export default class ReviewList extends Component {
  // http://localhost:3000/
  render() {
    const shoppingCart = localStorage.getItem('shoppingCart');
    const shoppingCartInfos = JSON.parse(shoppingCart);
    const { reviews } = shoppingCartInfos;
    return (
      <section>
        {
          reviews.map(() => (
              <li key={  }>
                <ReviewItem reviwes={ reviews } />
              </li>
            )
          )
        }
        <h1>oi =D</h1>
      </section>
    );
  }
};
