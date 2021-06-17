import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerRatingForm extends Component {
  render() {
    const { info } = this.props;
    const { email, comment, rating } = info;
    return (
      <div>
        <form>
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
          <input
            type="button"
            onClick={ this.submitRating }
          />
        </form>
      </div>
    );
  }
}

export default CustomerRatingForm;

CustomerRatingForm.propTypes = {
  info: PropTypes.shape({
    email: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
