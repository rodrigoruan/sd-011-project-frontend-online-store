import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      // rating: 0,
    };
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, message } = this.state;
    return (
      <form>
        <h2>Avaliações</h2>
        <fieldset>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={ email }
              required
              onChange={ this.handleInputs }
            />
          </label>
          <div>
            <label htmlFor="rating">
              <input
                type="checkbox"
                name="rating"
                value="1"
                required
                onChange={ this.handleInputs }
              />
            </label>
            <label htmlFor="rating">
              <input
                type="checkbox"
                name="rating"
                value="2"
                onChange={ this.handleInputs }
              />
            </label>
            <label htmlFor="rating">
              <input
                type="checkbox"
                name="rating"
                value="3"
                onChange={ this.handleInputs }
              />
            </label>
            <label htmlFor="rating">
              <input
                type="checkbox"
                name="rating"
                value="4"
                onChange={ this.handleInputs }
              />
            </label>
            <label htmlFor="rating">
              <input
                type="checkbox"
                name="rating"
                value="5"
                onChange={ this.handleInputs }
              />
            </label>
          </div>
          <label htmlFor="message">
            <textarea
              data-testid="product-detail-evaluation"
              type="text"
              name="message"
              value={ message }
              placeholder="Mensagem(opcional)"
              cols="30"
              rows="10"
              onChange={ this.handleInputs }
            />
          </label>
          <button type="button">Avaliar</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
