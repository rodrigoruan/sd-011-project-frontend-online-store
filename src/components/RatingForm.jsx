import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <fieldset>
          <input
            type="radio"
            name="rating"
            value="1"
            onChange={ handleFormChange }
            checked={ evaluationForm.rating === '1' }
            required
          />
          <input
            type="radio"
            name="rating"
            value="2"
            onChange={ handleFormChange }
            checked={ evaluationForm.rating === '2' }
            required
          />
          <input
            type="radio"
            name="rating"
            value="3"
            onChange={ handleFormChange }
            checked={ evaluationForm.rating === '3' }
            required
          />
          <input
            type="radio"
            name="rating"
            value="4"
            onChange={ handleFormChange }
            checked={ evaluationForm.rating === '4' }
            required
          />
          <input
            type="radio"
            name="rating"
            value="5"
            onChange={ handleFormChange }
            checked={ evaluationForm.rating === '5' }
            required
          />
        </fieldset>
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
