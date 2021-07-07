import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AddToCartButton, RatingForm, Header } from '../components';
import freeShippingSvg from '../freeShippingSvg';

const freeShippingParagraph = (
  <p className="relative">
    <span className="mr-8 text-yellow-400">Frete Grátis</span>
    {freeShippingSvg}
  </p>
);

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
    console.log(target);

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

  getAverageEvaluation(evaluationArray) {
    if (!evaluationArray.length) return 0;

    return Math.round(evaluationArray.reduce((acc, { rating }) => (
      parseFloat(rating) + acc), 0) / evaluationArray.length);
  }

  render() {
    const { location: { state: { product } },
      addItemToCart,
      totalItemCount } = this.props;
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
      <>
        <Header showCartButton totalItemCount={ totalItemCount } />
        <main className="grid grid-cols-8 p-12 gap-9">
          <section className="col-span-2">
            <img className="w-full h-80 object-cover" src={ thumbnail } alt={ title } />
          </section>

          <article className="col-span-3 flex flex-col gap-8 text-right">
            <h1
              className="text-3xl"
              data-testid="product-detail-name"
            >
              { title }
            </h1>

            <section className="flex justify-end">
              <h1 className="text-lg">Disponibilidade:</h1>
              { availableQuantity ? (
                <p className="text-lg">
                  { `Produtos Disponíveis: ${availableQuantity}` }
                </p>
              )
                : <p className="text-lg ml-4">Esgotado</p> }
              { soldQuantity ? <p>{ `Produtos Vendidos: ${soldQuantity}` }</p> : '' }
            </section>

            <section className="flex flex-col gap-2">
              <p className="text-2xl font-bold">{ `R$${price.toFixed(2)}` }</p>
              { this.getInstallmentsElement(product) }
              { shipping.free_shipping && freeShippingParagraph }
            </section>

            <section>
              <AddToCartButton
                product={ product }
                addItemToCart={ addItemToCart }
                testid="product-detail-add-to-cart"
                callToAction="Adicionar à sacola"
                size="large"
              />
            </section>
          </article>

          <section className="col-span-3">
            <h1>Avaliações</h1>

            <RatingForm
              handleSubmitRating={ this.handleSubmitRating }
              handleFormChange={ this.handleFormChange }
              evaluationForm={ evaluationForm }
            />

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
      </>
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
  totalItemCount: PropTypes.number,
}.isRequired;
