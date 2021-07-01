import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from '../components/Rating';
import '../styles/AvaliationForm.css';

export default class AvaliationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avaliation: {
        formStars: 0,
        email: '',
        message: '',
      },
    };
    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    // função seta o estado recuperando o valor anterior e espalhando ele no novo objeto
    this.setState((state) => ({
      avaliation: {
        ...state.avaliation,
        [name]: value,
      },
    }));
  }

  handleForm() {
    // recebe props e estado
    const { productId } = this.props;
    const { avaliation } = this.state;

    // Recebe as avaliações do item do localStorage e trata se estiver vazia
    let storage = JSON.parse(localStorage.getItem(`reviewsProduct${productId}`));
    if (!storage) {
      storage = [];
    }

    const idObj = { id: productId };

    // junta o objeto do id com o estado atual da aplicação
    const obj = Object.assign(idObj, avaliation);

    // Adiciona ao localStorage a avaliação
    storage.push(obj);
    localStorage.setItem(`reviewsProduct${productId}`, JSON.stringify([...storage]));

    // Força a página atualizar
    window.location.reload();
  }

  render() {
    const { avaliation } = this.state;
    const { email, message } = avaliation;
    return (
      <form>
        <h2>Avaliações</h2>
        <div className="form-check email-rating">
          <label htmlFor="form-email">
            Email:
            <input
              name="email"
              id="form-email"
              value={ email }
              // placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
        <Rating handleChange={ this.handleChange } />
        </div>
        <div>
          <label htmlFor="form-text-area">
            <textarea
              name="message"
              data-testid="product-detail-evaluation"
              id="form-text-area"
              value={ message }
              cols="30"
              rows="10"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <button
            onClick={ this.handleForm }
            className="btn btn-primary"
            type="button"
          >
            Avaliar
          </button>
        </div>
      </form>
    );
  }
}

AvaliationForm.propTypes = {
  productId: PropTypes.string.isRequired,
};
