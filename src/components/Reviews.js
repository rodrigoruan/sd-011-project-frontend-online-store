import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  render() {
    const { productId } = this.props;

    return (
      <section>
        <ReviewForm productId={ productId } forceReviewsUpdate={ this.forceUpdate } />
        <ReviewList productId={ productId } />
      </section>
    );
  }
}

Reviews.propTypes = {
  productId: PropTypes.string.isRequired,
};
