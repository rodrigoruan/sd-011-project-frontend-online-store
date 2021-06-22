import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../App.css';

class CommentForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      avaliation: '',
      rating: null,
      ratingHover: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getInformationForms = this.getInformationForms.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, avaliation, rating } = this.state;
    const customerEmail = email;
    const customerRating = rating;
    const customerCommentValue = avaliation;
    const { submitAvaliation } = this.props;
    submitAvaliation(customerEmail, customerRating, customerCommentValue);
  }

  getInformationForms(event) {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  setRating(ratingValue) {
    this.setState({
      ratingHover: ratingValue,
    });
  }

  render() {
    const { rating, ratingHover } = this.state;
    const numberOfStars = 5;
    return (
      <div>
        <form
          onSubmit={ this.handleSubmit }
        >
          <div className="container-forms">
            <input
              type="email"
              name="email"
              placeholder="Email"
              size="30"
              className="input-email-forms"
              onChange={ this.getInformationForms }
            />
            <div className="container-stars">
              {[...Array(numberOfStars)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label htmlFor={ index } key={ index }>
                    <input
                      id={ index }
                      className="radio-star"
                      type="radio"
                      name="rating"
                      value={ ratingValue }
                      onClick={ this.getInformationForms }
                      required
                    />
                    <FaStar
                      className="star-rating"
                      color={ ratingValue <= (ratingHover || rating)
                        ? '#ffc107' : '#e4e5e9' }
                      onMouseEnter={ () => this.setRating(ratingValue) }
                      onMouseLeave={ () => this.setRating(null) }
                      size={ 30 }
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
            name="avaliation"
            onChange={ this.getInformationForms }
            rows="6"
            cols="60"
          />
          <div>
            <button
              type="submit"
            >
              Postar Avaliação
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  submitAvaliation: PropTypes.func.isRequired,
};

export default CommentForm;
