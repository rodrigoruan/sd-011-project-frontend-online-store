import React from 'react';
import PropTypes from 'prop-types';
import ShowScore from './ShowScore';
import '../CartButton/cartbutton.css';

class RateComment extends React.Component {
  constructor() {
    super();
    this.state = {
      score: [],
      rate: '',
      commentary: '',
    };
    this.switchScore = this.switchScore.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.saveComments = this.saveComments.bind(this);
  }

  componentDidMount() {
    const { product } = this.props;
    const updateComments = JSON.parse(localStorage.getItem(product));
    if (updateComments !== null) {
      this.saveComments(updateComments);
    } else console.log('Erro');
  }

  saveComments(updateComments) {
    this.setState({
      score: updateComments,
    });
  }

  switchScore(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  updateComment() {
    const { score, rate, commentary } = this.state;
    const { product } = this.props;
    const updateScore = { rate, commentary };
    localStorage.setItem(product, JSON.stringify([...score, updateScore]));
    this.setState({
      score: [...score, updateScore],
      rate: '',
      commentary: '',
    });
  }

  render() {
    const { rate, commentary, score } = this.state;
    return (
      <main>
        <form>
          <label htmlFor="rate">
            Avalie:
            <input
              name="rate"
              type="number"
              max="5"
              min="1"
              required
              value={ rate }
              onChange={ this.switchScore }
            />
          </label>
          <label htmlFor="comment">
            Escreva seu comentário:
            <textarea
              data-testid="product-detail-evaluation"
              name="commentary"
              value={ commentary }
              onChange={ this.switchScore }
              cols="60"
            />
          </label>
          <button className="cartIcon" type="button" onClick={ this.updateComment }>
            Enviar
          </button>
        </form>
        { score.map((callback, index) => (
          <ShowScore callback={ callback } key={ index } />)) }
      </main>
    );
  }
}

RateComment.propTypes = {
  product: PropTypes.string.isRequired,
};

export default RateComment;
