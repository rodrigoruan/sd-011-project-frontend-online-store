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
  }

  handleFormChange({ target }) {
    const { name, value } = target;

    this.setState(({ evaluationForm }) => {
      const newEvaluationForm = { ...evaluationForm };
      newEvaluationForm[name] = value;

      return { evaluationForm: newEvaluationForm };
    });
  }

  handleSubmitRating({ target }) {

  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { evaluationForm, evaluations } = this.state;

    console.log(product);
    return (
      <main>
        <section>
          <h1>Especificações do produto</h1>
          <h1>{ `${product.title} - R$${product.price}` }</h1>
          <img src={ product.thumbnail } alt={ product.title } />
        </section>
        <section>
          <h1>Formas de pagamento</h1>
          { product.shipping.free_shipping ? <p>Free Shipping</p> : ''}
          <p>{ `Disponível: ${product.available_quantity}` }</p>
          <p>{ `${product.installments.amount}` }</p>
        </section>

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
