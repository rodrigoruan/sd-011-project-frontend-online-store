import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluationForm: {
        email: '',
        message: '',
        rating: '',
      },
      evaluations: [],
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmitRating = this.handleSubmitRating.bind(this);
  }

  handleFormChange({ target }) {
    const { name, value } = target;

    this.setState(({ evaluationForm }) => {
      const newEvaluationForm = { ...evaluationForm };
      newEvaluationForm[name] = value;

      return { evaluationForm: newEvaluationForm };
    });
  }

  handleSubmitRating(e) {
    e.preventDefault();

    this.setState(({ evaluations, evaluationForm }) => {
      const userEvaluation = { ...evaluationForm, id: evaluationForm.id };
      const newEvaluations = [...evaluations, userEvaluation];

      return {
        evaluations: newEvaluations,
        evaluationForm: {
          email: '',
          message: '',
          rating: '',
        },
      };
    });
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { evaluationForm, evaluations } = this.state;

    return (
      <main>
        <p data-testid="product-detail-name">{ product.title }</p>
        <section>
          <h1>Avaliações</h1>

          <form onSubmit={ this.handleSubmitRating }>
            <input
              type="email"
              value={ evaluationForm.email }
              placeholder="Email"
              onChange={ this.handleFormChange }
              name="email"
              required
            />
            <fieldset>
              <input
                type="radio"
                name="rating"
                value="1"
                onChange={ this.handleFormChange }
                checked={ evaluationForm.rating === '1' }
                required
              />
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={ this.handleFormChange }
                checked={ evaluationForm.rating === '2' }
                required
              />
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={ this.handleFormChange }
                checked={ evaluationForm.rating === '3' }
                required
              />
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={ this.handleFormChange }
                checked={ evaluationForm.rating === '4' }
                required
              />
              <input
                type="radio"
                name="rating"
                value="5"
                onChange={ this.handleFormChange }
                checked={ evaluationForm.rating === '5' }
                required
              />
            </fieldset>
            <textarea
              type="email"
              value={ evaluationForm.message }
              placeholder="Mensagem (opcional)"
              onChange={ this.handleFormChange }
              name="message"
              data-testid="product-detail-evaluation"
            />
            <button type="submit">Avaliar</button>
          </form>

          <ul>
            { evaluations.map(({ id, email, message, rating }) => (
              <li key={ id }>
                <section>
                  <p>{ email }</p>
                  { message ? <p>{ message }</p> : null }
                </section>
                <section>
                  { rating }
                </section>
              </li>
            )) }
          </ul>
        </section>
      </main>
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape(({
    state: PropTypes.shape({
      title: PropTypes.string,
    }),
  })),
}.isRequired;
