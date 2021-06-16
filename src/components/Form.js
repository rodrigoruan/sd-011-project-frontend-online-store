import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      comment: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { handleOnChange } = this.props;
    const { email, comment } = this.state;
    return (
      <div>
        <h2>Avaliar</h2>
        <form>
          <div>
            <input
              data-testid="product-detail-evaluation"
              type="email"
              pattern="^[\w_.]{6,}@[a-z]{5,}.com(.br)?$"
              name="email"
              onChange={ this.onChange }
              value={ email }
              required
            />
            <input
              type="radio"
              name="review"
              value="1"
              onChange={ this.onChange }
              required
            />
            <input
              type="radio"
              name="review"
              value="2"
              onChange={ this.onChange }
              required
            />
            <input
              type="radio"
              name="review"
              value="3"
              onChange={ this.onChange }
              required
            />
            <input
              type="radio"
              name="review"
              value="4"
              onChange={ this.onChange }
              required
            />
            <input
              type="radio"
              name="review"
              value="5"
              onChange={ this.onChange }
              required
            />
          </div>
          <div>
            <textarea name="comment" cols="30" rows="10" value={ comment } />
          </div>
          <button type="button" onClick={ handleOnChange }>
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
};
