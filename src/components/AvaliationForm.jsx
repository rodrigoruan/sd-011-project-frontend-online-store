import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    // função genérica para definir estado a partir do nome e atualizar o shouldRedirect
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
        <div className="form-wrapper">
          <div>
            <label htmlFor="form-email">
              <input
                name="email"
                id="form-email"
                value={ email }
                placeholder="Email"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="1-star">
              1
              <input
                type="radio"
                value={ 1 }
                name="formStars"
                id="1-star"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="2-star">
              2
              <input
                type="radio"
                value={ 2 }
                name="formStars"
                id="2-star"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="3-star">
              3
              <input
                type="radio"
                value={ 3 }
                name="formStars"
                id="3-star"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="4-star">
              4
              <input
                type="radio"
                value={ 4 }
                name="formStars"
                id="4-star"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="5-star">
              5
              <input
                type="radio"
                value={ 5 }
                name="formStars"
                id="5-star"
                onChange={ this.handleChange }
              />
            </label>
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
            <button onClick={ this.handleForm } type="button">Avaliar</button>
          </div>
        </div>
      </form>
    );
  }
}

AvaliationForm.propTypes = {
  productId: PropTypes.string.isRequired,
};
