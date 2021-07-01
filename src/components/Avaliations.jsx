import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Avaliations.css';

export default class Avaliations extends Component {
  constructor() {
    super();
    this.state = {
      avaliations: [],
    };
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    // Recebe o id do produto via props
    const { productId } = this.props;

    // Recupera o localStorage do item
    let storage = JSON.parse(localStorage.getItem(`reviewsProduct${productId}`));
    if (storage === null) {
      storage = [];
    }

    // Seta o estado com as avaliações
    this.setState((state) => ({
      avaliations: [...state.avaliations, ...storage],
    }));
  }

  render() {
    const { avaliations } = this.state;
    return (
      <div className="avaliation-wrapper">
        <h2>Pessoas que avaliaram</h2>
        { avaliations.map(({ formStars, email, message }, index) => (
          <div className="avaliation form-check" key={ index }>
            <div className="avaliation-email-rating">
              <p>
                Email:
                { email }
              </p>
              <p className="avaliation-rating">
                Nota:
                { formStars }
              </p>
            </div>
            <div className="avaliation-message">
              <p>
                Mensagem:
                { message }
              </p>
            </div>
          </div>
        )) }
      </div>
    );
  }
}

Avaliations.propTypes = {
  productId: PropTypes.string.isRequired,
};
