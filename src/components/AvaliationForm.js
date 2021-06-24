import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

export default class AvaliationForm extends Component {
  constructor() {
    super();

    this.state = {
      allAvaliations: [],
      email: '',
      message: '',
      stars: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // getLocalStorage = () => {

  //   }

  alterStateStar = (newRating) => {
    this.setState({
      stars: newRating,
    });
  }

  // setLocalStorage = () => {
  // }

  render() {
    return (
      <form>
        <ReactStars
          // value={ 4 }
          // edit={ false }
          count={ 5 }
          onChange={ this.alterStateStar }
          size={ 25 }
          isHalf="true"
          activeColor="#ffd700"
        />
        <input
          name="email"
          onChange={ this.handleChange }
          placeholder="Email"
          type="text"
        />
        <br />
        <textarea
          name="message"
          onChange={ this.handleChange }
          type="text"
          placeholder="Mensagem(opcional)"
        />
        <br />
        <button type="button">Avaliar</button>
      </form>
    );
  }
}

AvaliationForm.propTypes = {

}
