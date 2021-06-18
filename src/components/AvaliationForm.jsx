import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AvaliationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStars: 0,
      email: '',
      message: '',
    };
    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // função genérica para definir estado a partir do nome
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  handleForm(event) {
    event.preventDefault();
    // recebe props
    const { productId, getForm } = this.props;
    const idObj = { id: productId };
    // junta o objeto do id com o estado atual da aplicação
    const obj = Object.assign(idObj, this.state);
    // passa as informações para o componente pai
    getForm(obj);
  }

  render() {
    const { email, message } = this.state;
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
                id="form-text-area"
                value={ message }
                cols="30"
                rows="10"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <button onClick={ this.handleForm } type="submit">Avaliar</button>
          </div>
        </div>
      </form>
    );
  }
}

AvaliationForm.propTypes = {
  productId: PropTypes.string.isRequired,
  getForm: PropTypes.func.isRequired,
};
