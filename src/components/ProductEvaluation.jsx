import React, { Component } from 'react';
import PropTypes from 'prop-types';
// All credits of Rater to https://reactjsexample.com/a-star-rater-in-react-js/
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import 'bulma/css/bulma.min.css';

export default class ProductEvaluation extends Component {
  render() {
    const { name } = this.props;
    const evaluations = JSON.parse(localStorage.getItem(name));
    console.log(evaluations);

    return (
      <div className="all-evaluations">
        {
          evaluations.map(({ email, textArea, rating }) => (
            <div key={ name } className="box evaluation-container">
              <div className="center">
                <Rater
                  total={ 5 }
                  rating={ rating }
                  interactive={ false }
                />
              </div>
              <p className="center">
                Email:
                <br />
                {email}
              </p>
              {
                textArea.trim() !== ''
                  ? (
                    <p className="pt-4 commentary">
                      Comentário:
                      <br />
                      {textArea}
                    </p>
                  )
                  : null
              }
            </div>
          ))
        }
      </div>
    );
  }
}

ProductEvaluation.propTypes = {
  name: PropTypes.string,
}.isRequired;
