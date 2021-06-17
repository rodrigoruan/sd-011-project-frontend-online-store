import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerRatingForm from '../components/CustomerRatingForm';

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      comment: '',
      rating: 1,
      commentList: [email, comment, rating],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitRating = this.submitRating.bind(this);
    this.setCustomerComment = this.setCustomerComment.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  submitRating() {
    this.setState((state) => ({
      commentList: [state.commentList, [email, comment, rating]] }));
  }

  render() {
    const {
      location:
      { state:
        { produto:
          { condition, price, thumbnail, title } } } } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2>{ price }</h2>
        <img src={ thumbnail } alt={ `imagem de ${title}` } />
        <p>{ condition }</p>
        <CustomerRatingForm info={ this.state } />
      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      produto: PropTypes.shape({
        condition: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};
