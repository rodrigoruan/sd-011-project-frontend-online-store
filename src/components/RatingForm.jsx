import React, { Component } from 'react';
import './RatingForm.css';

class RatingForm extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      prevComments: [],
    };
  }

    currentComment = (event) => {
      if (event.target.name === 'comment') {
        this.setState({
          comment: event.target.value,
        });
      }
    }

    sendComment = () => {
      this.setState(({ comment, prevComments }) => ({
        prevComments: [...prevComments, comment],
        comment: '',
      }));
    }

    render() {
      const { comment, prevComments } = this.state;
      return (
        <div className="rating-form-container">
          <div>
            <h3>Avaliações</h3>
            {prevComments.map((comments, index) => (
              <p key={ index }>{`Comentário: ${comments}`}</p>
            ))}
          </div>
          <form className="rating-form">
            <input className="email" placeholder="E-mail" type="text" name="email" />
            <input
              type="number"
              placeholder="Nota"
              min={ 0 }
              max={ 5 }
              className="rating"
            />
            <textarea
              data-testid="product-detail-evaluation"
              type="text"
              onChange={ this.currentComment }
              name="comment"
              value={ comment }
              placeholder="Mensagem(opcional)"
            />
            <button onClick={ this.sendComment } type="button">Avaliar</button>
          </form>
        </div>
      );
    }
}

export default RatingForm;
