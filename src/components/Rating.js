import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { faStar } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRating from 'react-star-ratings';
import Comment from './Comment';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0,
      comment: '',
      email: '',
      ratings: [],
    };
    this.rate = this.rate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.createComment = this.createComment.bind(this);
    this.saveComments = this.saveComments.bind(this);
    this.reloadComments = this.reloadComments.bind(this);
  }

  componentDidMount() {
    this.reloadComments();
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // rate({ target }) {
  //   const { id } = target;
  //   if (id) {
  //     this.setState({ rate: id });
  //   }
  // }

  rate(newRating) {
    this.setState({
      rate: newRating,
    });
  }

  saveComments() {
    const { id } = this.props;
    const { ratings } = this.state;
    localStorage[id] = JSON.stringify(ratings);
  }

  reloadComments() {
    const { id } = this.props;
    if (localStorage[id]) {
      const comments = JSON.parse(localStorage[id]);
      this.setState({
        ratings: [...comments],
      });
    }
  }

  async createComment() {
    const { rate, comment, email } = this.state;
    if ((email) && email.includes('@')) {
      const rating = {
        rate,
        comment,
        email,
      };
      await this.setState((previous) => ({
        ratings: [...previous.ratings, rating],
        rate: 0,
        comment: '',
        email: '',
      }));
      this.saveComments();
    }
  }

  render() {
    const { rate, comment, email, ratings } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={ this.onChange }
            value={ email }
          />
          <StarRating
            rating={ rate }
            starRatedColor="var(--secondary-color)"
            starHoverColor="var(--secondary-color)"
            starDimension="20px"
            changeRating={ this.rate }
            numberOfStars={ 5 }
            name="rating"
          />
          <p id="rating">{ rate }</p>
          <textarea
            maxLength="200"
            name="comment"
            onChange={ this.onChange }
            value={ comment }
            data-testid="product-detail-evaluation"
          />
          <button type="button" onClick={ this.createComment }>Enviar</button>
        </form>
        <div>
          {ratings.map((rating, index) => (
            <Comment rating={ rating } key={ index } />
          ))}
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Rating;
