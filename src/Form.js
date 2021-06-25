import React from 'react';
import PropTypes from 'prop-types';
import Avaliacao from './Avaliacao';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      avaliacoes: [],
      rating: '',
      commentary: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.updateComments = this.updateComments.bind(this);
    this.importComments = this.importComments.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    const importedComments = JSON.parse(localStorage.getItem(productId));
    if (importedComments !== null) {
      this.importComments(importedComments);
    }
  }

  handleChanges(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  importComments(comments) {
    this.setState({
      avaliacoes: comments,
    });
  }

  updateComments() {
    const { avaliacoes, rating, commentary } = this.state;
    const { productId } = this.props;
    const novaAvaliacao = { rating, commentary };
    localStorage.setItem(productId, JSON.stringify([...avaliacoes, novaAvaliacao]));
    this.setState({
      avaliacoes: [...avaliacoes, novaAvaliacao],
      rating: '',
      commentary: '',
    });
  }

  render() {
    const { rating, commentary, avaliacoes } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="rating">
            Avaliação:
            <input
              name="rating"
              type="number"
              max="5"
              min="1"
              required
              value={ rating }
              onChange={ this.handleChanges }
            />
          </label>
          <label htmlFor="comment">
            Deixe seu comentário:
            <textarea
              data-testid="product-detail-evaluation"
              name="commentary"
              value={ commentary }
              onChange={ this.handleChanges }
            />
          </label>
          <button type="button" onClick={ this.updateComments }>AVALIAR</button>
        </form>
        <div>
          { avaliacoes.map((avaliacao, index) => (
            <Avaliacao
              avaliacao={ avaliacao }
              key={ index }
            />)) }
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Form;
