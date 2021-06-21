import React, { Component } from 'react';

export default class EvaluationForm extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="evaluation-field">
          Email:
          <input type="text" />
          <textarea
            data-testid="product-detail-evaluation"
            name="evaluation-field"
            cols="30"
            rows="10"
          >
            Digite sua mensagem
          </textarea>
          <button type="button">Avaliar</button>
        </label>
      </form>
    );
  }
}
