import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <h2>Pessoas que avaliaram</h2>
        { avaliations.map(({ formStars, email, message }, index) => (
          <div key={ index }>
            <div>
              <p>
                Email:
                { email }
              </p>
              <p>
                Nota:
                { formStars }
              </p>
            </div>
            <div>
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
