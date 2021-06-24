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

  componentDidMount() {
    this.getLocalStorage();
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

  getLocalStorage = () => {
    const { title } = this.props;
    const storage = JSON.parse(localStorage.getItem(`Avaliation ${title}`));
    if (storage) {
      this.setState({
        allAvaliations: storage,
      });
    }
  }

  setLocalStorage = () => {
    const { email, message, stars } = this.state;
    const { title } = this.props;
    const avaliation = { email, message, stars };
    const storage = JSON.parse(localStorage.getItem(`Avaliation ${title}`));
    if (storage) {
      localStorage.setItem(`Avaliation ${title}`,
        JSON.stringify([...storage, avaliation]));
      this.setState({
        allAvaliations: [...storage, avaliation],
      });
    } else {
      localStorage.setItem(`Avaliation ${title}`, JSON.stringify([avaliation]));
      this.setState({
        allAvaliations: [avaliation],
      });
    }
    this.setState({
      email: '',
      message: '',
      stars: 0,
    });
  }

  render() {
    const { email, message, stars, allAvaliations } = this.state;
    return (
      <div>
        <form>
          <ReactStars
            value={ stars }
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
            data-testid="product-detail-evaluation"
            value={ message }
            name="message"
            onChange={ this.handleChange }
            type="text"
            placeholder="Mensagem(opcional)"
          />
          <br />
          <button
            onClick={ this.setLocalStorage }
            type="button"
          >
            Avaliar
          </button>
        </form>
        <div>
          {allAvaliations && allAvaliations.map((avaliation, index) => (
            <div key={ index }>
              <h3>{ avaliation.email }</h3>
              <span>{ avaliation.message }</span>
              <br />
              <span>Avaliação: </span>
              <ReactStars
                size={ 20 }
                value={ avaliation.stars }
                isHalf="true"
                edit={ false }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

AvaliationForm.propTypes = {
  title: PropTypes.string.isRequired,
};
