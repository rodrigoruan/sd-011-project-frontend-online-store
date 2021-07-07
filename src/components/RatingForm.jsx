import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRating';

export class RatingForm extends Component {
  render() {
    const { handleSubmitRating, handleFormChange, evaluationForm } = this.props;

    return (
      <form onSubmit={ handleSubmitRating }>
        <input
          type="email"
          value={ evaluationForm.email }
          placeholder="Email"
          onChange={ handleFormChange }
          name="email"
          required
        />
        <StarRating
          handleFormChange={ handleFormChange }
          rating={ evaluationForm.rating }
        />
        <textarea
          type="email"
          value={ evaluationForm.message }
          placeholder="Mensagem (opcional)"
          onChange={ handleFormChange }
          name="message"
          data-testid="product-detail-evaluation"
        />
        <button type="submit">Avaliar</button>
      </form>
    );
  }
}

export default RatingForm;

RatingForm.propTypes = {
  handleFormChange: PropTypes.func,
  handleSubmitRating: PropTypes.func,
  evaluationForm: PropTypes.shape({
    email: PropTypes.string,
    message: PropTypes.string,
    rating: PropTypes.number,
  }),
}.isRequired;
