import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import './Form.css';

class EvaluationForm extends Component {
  constructor() {
    super();

    this.state = {
      haveStars: false,
      email: '',
      stars: 0,
      comment: '',
    };
  }

  handleStarsClick = () => {
    this.setState({ haveStars: true });
  }

  handleChange = ({ target }) => {
    const { name } = target;

    this.setState({
      [name]: target.value,
    });
  }

  saveReview = (event) => {
    const { email, stars, comment } = this.state;
    const { id } = this.props;

    if (stars) {
      const review = {
        id,
        email,
        stars,
        comment,
      };
      const reviewsInStorage = JSON.parse(localStorage.getItem('allReviews')) || [];
      reviewsInStorage.push(review);
      localStorage.setItem('allReviews', JSON.stringify(reviewsInStorage));
    } else {
      event.preventDefault();
    }
  }

  render() {
    const { email, stars, comment, haveStars } = this.state;

    return (
      <section className="evaluation-form" onSubmit={ this.saveReview }>
        <form action="" target="_self" method="GET">
          <h2 className="form-title">Avaliações</h2>
          <section className="form-space">
            <div className="inputs-space">
              <input
                className="input-email"
                name="email"
                placeholder="E-mail"
                type="text"
                value={ email }
                onChange={ this.handleChange }
                required
              />
              <StarRating required stars={ stars } handleChange={ this.handleChange } />
              <textarea
                name="comment"
                className="text-message"
                cols="30"
                rows="5"
                placeholder="Mensagem (opcional)"
                data-testid="product-detail-evaluation"
                value={ comment }
                onChange={ this.handleChange }
              />
              <button
                type="submit"
                onClick={ this.handleStarsClick }
                className="submit-evaluation"
              >
                Avalie
              </button>
              { haveStars ? <h3>Por Favor adicione classificação de estrelas</h3> : '' }
            </div>
          </section>
        </form>
      </section>
    );
  }
}

EvaluationForm.propTypes = {
  id: PropTypes.string,
};

EvaluationForm.defaultProps = {
  id: 'productID',
};

export default EvaluationForm;
