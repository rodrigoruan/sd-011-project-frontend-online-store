import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { handleFormSubmit } = this.props;
    return (
      <form onSubmit={ handleFormSubmit }>
        <h2>Avaliações</h2>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Digite seu email"
            id="email"
            name="email"
            required
          />
        </label>
        <br />
        <label htmlFor="avaliacao">
          Coloque sua nota:
          <input name="score" type="number" min="1" max="5" required />
        </label>
        <br />
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            data-testid="product-detail-evaluation"
            placeholder="Deixe seu comentário (opcional)"
          />
        </label>
        <button type="submit">Avaliar </button>
      </form>
    );
  }
}

Product.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
