import React, { Component } from 'react';
import PropTypes from 'prop-types';
// All credits of Rater to https://reactjsexample.com/a-star-rater-in-react-js/
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

export default class ProductEvaluation extends Component {
  render() {
    const { name } = this.props;
    const evaluations = JSON.parse(localStorage.getItem(name));
    console.log(evaluations);

    return (
      <div>
        {
          evaluations.map(({ email, textArea, rating }) => (
            <div key={ name }>
              <p>{email}</p>
              <p>{textArea}</p>
              <Rater
                total={ 5 }
                rating={ rating }
                interactive={ false }
              />
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
