import React, { Component } from 'react';
import RatingEvaluation from './RatingEvaluation';

class ProductEvaluation extends Component {
  constructor(props) {
    super(props);
    const localEvaluation = localStorage.getItem('rating');
    this.state = {
      rating: localEvaluation,
    };
    this.handleStorageRating = this.handleStorageRating.bind(this);
  }

  handleStorageRating({ target }) {
    this.setState({
      rating: target.value,
    });
    localStorage.setItem('rating', target.value);
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        Avaliações
        <fieldset>
          <form>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
            />
            <RatingEvaluation
              rating={ rating }
              handleStorageRating={ this.handleStorageRating }
            />
            <textarea
              id="message"
              type="text"
              data-testid="product-detail-evaluation"
              name="message"
              placeholder="Mensagem (opcional)"
            />
            <div>
              <button type="submit">Avaliar</button>
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default ProductEvaluation;
