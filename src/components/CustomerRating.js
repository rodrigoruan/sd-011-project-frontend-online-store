import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './CustomerRating.module.css';

class CustomerRating extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rating: '',
      comment: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { addRatingFunction, productId } = this.props;
    const { email, rating, comment } = this.state;
    return (
      <div className={ style.container }>
        <h1>Avaliações</h1>
        <form className={ style.form }>
          <p>Itens com * são obrigatórios</p>
          <input
            placeholder="Email*"
            name="email"
            type="text"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            placeholder="Nota*"
            name="rating"
            type="number"
            value={ rating }
            step={ 0.5 }
            min={ 0 }
            max={ 5 }
            onChange={ this.handleChange }
            required
          />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Comentário"
            name="comment"
            type="text"
            value={ comment }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ () => addRatingFunction({ ...this.state, id: productId }) }
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

CustomerRating.propTypes = {
  addRatingFunction: PropTypes.shape({
    email: PropTypes.string,
    rating: PropTypes.number,
    comment: PropTypes.string,
  }),
  productId: PropTypes.string,
}.isRequired;

export default CustomerRating;
