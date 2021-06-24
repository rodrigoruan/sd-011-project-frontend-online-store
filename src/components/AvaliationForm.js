import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

export default class AvaliationForm extends Component {
  constructor() {
    super();

    this.state = {
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

  alterStateStar = (newRating) => {
    this.setState({
      stars: newRating,
    });
  }

  setLocalStorage = () => {
    const { email, message, stars } = this.state;
    const { title } = this.props;
    const avaliation = { email, message, stars };
    const storage = JSON.parse(localStorage.getItem(`Avaliation ${title}`));
    if (storage) {
      localStorage.setItem(`Avaliation ${title}`, JSON.stringify([...storage, avaliation]));
    } else {
      localStorage.setItem(`Avaliation ${title}`, JSON.stringify([avaliation]));
    }
    this.setState({
      email: '',
      message: '',
      stars: 0,
    });
  }

  render() {
    const { email, message, stars } = this.state;
    return (
      <form>
        <ReactStars
          value={ stars }
          // edit={ false }
          count={ 5 }
          onChange={ this.alterStateStar }
          size={ 25 }
          isHalf="true"
          activeColor="#ffd700"
        />
        <input
          value={ email }
          name="email"
          onChange={ this.handleChange }
          placeholder="Email"
          type="text"
        />
        <br />
        <textarea
          value={ message }
          name="message"
          onChange={ this.handleChange }
          type="text"
          placeholder="Mensagem(opcional)"
        />
        <br />
        <button onClick={ this.setLocalStorage } type="button">Avaliar</button>
      </form>
    );
  }
}

AvaliationForm.propTypes = {
  title: PropTypes.string.isRequired,
};
