import React, { Component } from 'react';
import * as storage from '../services/storage';
import PropTypes from 'prop-types';

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    const { productId } = this.props;

    this.state = {
      productId,
      email: '',
      message: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    storage.saveReview(this.state);
    event.preventDefault();
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, message } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={ this.handleInputChange }
          value={ email }
        />
        <textarea
          name="message"
          id="message"
          data-testid="product-detail-evaluation"
          cols="30"
          rows="10"
          placeholder="Mensagem (opcional)"
          onChange={ this.handleInputChange }
          value={ message }
        />
        <input
          type="submit"
          value="Avaliar"
        />
        {/* <button
          type="button"
          onClick={ () => {
            storage.saveEvaluation('parametro');
          } }
        >
          Avaliar
        </button> */}
      </form>
    );
  }
}

ReviewForm.propTypes = ({
  email: PropTypes.string,
  message: PropTypes.string,
}).isRequired;
