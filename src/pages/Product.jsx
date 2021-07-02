import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AddToCartButton, ShoppingCartButton } from '../components';

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
      const userEvaluation = { ...evaluationForm, id: evaluationForm.email };
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

  getInstallmentsElement({ installments }) {
    if (installments && installments.quantity && installments.amount) {
      return <p>{`Em até: ${installments.quantity}x de R$${installments.amount}` }</p>;
    }
    return null;
  }

  render() {
    const { location: { state: { product } }, addItemToCart } = this.props;
    const { evaluationForm, evaluations } = this.state;
    const {
      title,
      thumbnail,
      shipping,
      availableQuantity,
      soldQuantity,
      price,
    } = product;

    return (
      <main>
        <article>
          <h1>Especificações do produto</h1>

          <section>
            <h1 data-testid="product-detail-name">{ title }</h1>
            <img src={ thumbnail } alt={ title } />
          </section>

          <section>
            <h1>Disponibilidade</h1>
            { availableQuantity ? (
              <p>{ `Produtos Disponíveis: ${availableQuantity}` }</p>
            )
              : '' }
            { soldQuantity ? <p>{ `Produtos Vendidos: ${soldQuantity}` }</p> : '' }
          </section>

          <section>
            <h1>Formas de pagamento</h1>
            { shipping.free_shipping
              ? <p data-testid="free-shipping">FRETE GRATIS</p>
              : ''}
            <p>{ `R$${price}` }</p>
            { this.getInstallmentsElement(product) }
          </section>
        </article>

        <section>
          <AddToCartButton
            product={ product }
            addItemToCart={ addItemToCart }
            testid="product-detail-add-to-cart"
          />
          <ShoppingCartButton />
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
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool,
        }),
        availableQuantity: PropTypes.number,
        soldQuantity: PropTypes.string,
        installments: PropTypes.shape({
          quantity: PropTypes.number,
          amount: PropTypes.number,
        }),
        price: PropTypes.number,
      }),
    }),
  }),
  addItemToCart: PropTypes.func,
}.isRequired;
