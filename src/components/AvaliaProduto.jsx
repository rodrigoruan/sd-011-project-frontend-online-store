import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvaliaProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rating: 0,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.setState({ rating: event.target.value });
  }

  render() {
    const { comment, rating } = this.state;
    const { formSubmit } = this.props;
    return (
      <form onSubmit={ () => formSubmit(comment, rating) }>
        <div value={ rating } onChange={ this.onChangeValue }>
          <input type="radio" name="estrela" value="1" />
          1
          <input type="radio" name="estrela" value="2" />
          2
          <input type="radio" name="estrela" value="3" />
          3
          <input type="radio" name="estrela" value="4" />
          4
          <input type="radio" name="estrela" value="5" />
          5
        </div>

        <label htmlFor="textareaId">
          Deixe seu comentário:
          <textarea
            id="textareaId"
            data-testid="product-detail-evaluation"
            type="text"
            name="avalia"
            onChange={ (event) => this.setState({ comment: event.target.value }) }
            value={ comment }
          />
        </label>
        <input
          type="button"
          onClick={ () => formSubmit(comment, rating) }
          value="Enviar"
        />
      </form>
    );
  }
}
AvaliaProduto.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
export default AvaliaProduto;
