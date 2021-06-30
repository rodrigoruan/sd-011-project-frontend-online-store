import React from 'react';
import PropTypes from 'prop-types';
import style from './Avaliations.module.css';

class Avaliations extends React.Component {
  render() {
    const { avaliation: { email, message, rating } } = this.props;
    return (
      <div className={ style.avaliation }>
        <span>
          Email:
          {' '}
          { email }
          {' '}
        </span>
        <span>
          Avaliação:
          {' '}
          { message }
          {' '}
        </span>
        <span>
          Nota:
          {' '}
          { rating }
          {' '}
        </span>
      </div>
    );
  }
}

Avaliations.propTypes = {
  avaliation: PropTypes.shape({
    email: PropTypes.string,
    message: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};

export default Avaliations;
