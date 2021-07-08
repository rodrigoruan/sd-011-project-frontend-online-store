import React from 'react';
// import PropTypes from 'prop-types';

class Evaluation extends React.Component {
  constructor() {
    super();

    this.state = {
      evaluationText: '',
      rating: 0,
      reviewList: [
        // {
        //   id: 1,
        //   email: 'topzero',
        //   content: 'melhor impossivel',
        //   rating: 4,
        // },
        // {
        //   id: 2,
        //   email: 'ridiculo',
        //   content: 'impossivel',
        //   rating: 4,
        // },
        // {
        //   id: 3,
        //   email: 'top',
        //   content: 'melhor melhor',
        //   rating: 5,
        // },
        // {
        //   id: 4,
        //   email: 'rogerio',
        //   content: 'podia ser mais legal',
        //   rating: 4,
        // },
      ],
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    // this.onButtonClick = this.onButtonClick.bind(this);
  }

  onChangeHandler(event) {
    const { id, value } = event.target;
    // console.log('deu certo');
    this.setState({ [id]: value });
  }

  //   onButtonClick() {
  //     const { evaluationText, rating, reviewList } = this.state;
  //     reviewList.push({
  //         content: evaluationText,
  //         rating:rating
  //     })
  //   }

  renderReviews() {
    const { reviewList } = this.state;
    return (
      <div>
        <h3>Comentários</h3>
        {
          reviewList.map((review) => (
            <div key={ review.id }>
              <h4>{ review.email }</h4>
              <p>{ review.rating }</p>
              <p>{ review.content }</p>
            </div>
          ))
        }
      </div>
    );
  }

  render() {
    const { evaluationText, rating, reviewList } = this.state;

    return (
      <div>
        <form>
          <p>Avaliação</p>
          <textarea
            value={ evaluationText }
            id="evaluationText"
            cols="30"
            rows="5"
            placeholder="Comentário (opcional)"
            onChange={ this.onChangeHandler }
            data-testid="product-detail-evaluation"
          />
          <br />
          <input
            type="number"
            min="0"
            max="5"
            step="1"
            value={ rating }
            id="rating"
            onChange={ this.onChangeHandler }
            data-testid="rating-input"
          />
          <button
            type="button"
            onClick={ this.onButtonClick }
          >
            Avaliar
          </button>
        </form>
        <br />
        { !reviewList.length ? <h3>Sem Comentários</h3> : this.renderReviews()}
      </div>
    );
  }
}

// Evaluation.propTypes = {
//   evaluationText: PropTypes.string,
//   rating: PropTypes.number,
//   reviewList: PropTypes.array,
// }.isRequired;

export default Evaluation;
