import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      rating: '',
      comment: '',
      reviews: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitRating = this.submitRating.bind(this);
    this.mountReviews = this.mountReviews.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  async handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  updateState() {
    const { id } = this.props;
    this.setState({
      reviews: JSON.parse(localStorage.getItem(id)),
    });
  }

  mountReviews() {
    const { reviews } = this.state;
    if (!reviews) return;
    return reviews.map((review, index) => (
      <div key={ index }>
        <h3>{ review.email }</h3>
        <h4>{ review.rating }</h4>
        <p>{ review.comment }</p>
      </div>
    ));
  }

  submitRating(event) {
    event.preventDefault();
    const { id } = this.props;
    const data = (new FormData(event.target));
    let reviews = [];
    const review = {
      email: data.get('email'),
      rating: data.get('rating'),
      comment: data.get('comment'),
    };

    if (localStorage.getItem(id)) {
      reviews = JSON.parse(localStorage.getItem(id));
      reviews.push(review);
      localStorage.setItem(id, JSON.stringify(reviews));
      this.setState({ reviews });
    } else {
      reviews.push(review);
      localStorage.setItem(id, JSON.stringify(reviews));
      this.setState({ reviews });
    }
  }

  render() {
    const { email, rating, comment } = this.state;
    return (
      <div>
        <div>

          <form onSubmit={ this.submitRating }>
            <h2>Avaliações</h2>
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={ this.handleChange }
              value={ email }
            />
            <input
              name="rating"
              type="range"
              min="1"
              max="5"
              onChange={ this.handleChange }
              value={ rating }
            />
            <textarea
              name="comment"
              placeholder="Mensagem (Opcional)"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
              value={ comment }
            />
            <button
              type="submit"
            >
              Avaliar
            </button>
          </form>
        </div>
        { this.mountReviews() }
      </div>
    );
  }
}

export default RatingSection;

RatingSection.propTypes = {
  id: PropTypes.string.isRequired,
};
