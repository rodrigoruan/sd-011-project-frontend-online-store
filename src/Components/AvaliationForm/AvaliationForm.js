import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avaliations from '../Avaliations/Avaliations';

class AvaliationForm extends Component {
  constructor(props) {
    super(props);
    const { id } = props;

    this.state = {
      email: '',
      rating: '',
      message: '',
      id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAvaliation = this.handleAvaliation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleAvaliation() {
    const { email, rating, message, id } = this.state;
    const avaliation = {
      email,
      rating,
      message,
      id,
    };
    return this.addAvaliation(avaliation);
  }

  getProductAvaliations(id) {
    const avaliations = JSON.parse(localStorage.getItem('avaliations'));
    return avaliations.filter((aval) => aval[0] === id);
  }

  addAvaliation(avaliation) {
    const { email, rating, message, id } = avaliation;
    if (!localStorage.avaliations) {
      return this.createAndAddAvaliationOnLocalStorage(avaliation);
    }
    const avaliations = JSON.parse(localStorage.getItem('avaliations'));
    const productAvaliations = avaliations.filter((aval) => aval[0] === id);
    if (productAvaliations.length === 0) {
      return this.addFirstAvaliationOnNewProduct(avaliations, avaliation);
    }
    const newProductAvaliations = [...productAvaliations[0], { email, rating, message }];
    return this.addNewAvaliationToProduct(avaliations, newProductAvaliations, id);
  }

  createAndAddAvaliationOnLocalStorage({ email, rating, message, id }) {
    const productAvaliation = [id, { email, rating, message }];
    localStorage.setItem('avaliations', JSON.stringify([productAvaliation]));
    this.resetState();
  }

  addFirstAvaliationOnNewProduct(avaliations, { email, rating, message, id }) {
    const newAvaliations = [...avaliations, [id, { email, rating, message }]];
    localStorage.setItem('avaliations', JSON.stringify(newAvaliations));
    this.resetState();
  }

  addNewAvaliationToProduct(avaliations, newProductAvaliations, id) {
    const newAvaliations = avaliations.map((aval) => {
      if (aval[0] === id) {
        return newProductAvaliations;
      }
      return aval;
    });
    localStorage.setItem('avaliations', JSON.stringify(newAvaliations));
    this.resetState();
  }

  resetState() {
    this.setState({
      email: '',
      rating: '',
      message: '',
    });
  }

  render() {
    const { email, rating, message, id } = this.state;
    const productAvaliations = localStorage.avaliations
      ? this.getProductAvaliations(id) : [];
    return (
      <>
        <form>
          <h3>Avaliações</h3>
          <label htmlFor="email-id">
            Email:
            <input
              id="email-id"
              type="e-mail"
              placeholder="Digite seu e-mail"
              required
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="rating-id">
            Estrelas:
            <input
              id="rating-id"
              type="number"
              step={ 0.1 }
              min={ 0 }
              max={ 5 }
              placeholder="0 a 5"
              required
              value={ rating }
              name="rating"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="mensage-id">
            Mensagem:
            <textarea
              type="text"
              data-testid="product-detail-evaluation"
              id="mensage-id"
              value={ message }
              name="message"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <button
            onClick={ this.handleAvaliation }
            id="avaiation-button"
            type="button"
          >
            Avaliar
          </button>
        </form>
        <section>
          <h4>Avaliações recentes</h4>
          {(productAvaliations.length > 0)
            ? productAvaliations[0].map((avaliation, index) => {
              if (index !== 0) {
                return (<Avaliations avaliation={ avaliation } key={ index } />);
              }
              return (<span key={ index } />);
            })
            : <p>Produto ainda sem avaliações</p>}
        </section>
      </>
    );
  }
}

AvaliationForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AvaliationForm;
