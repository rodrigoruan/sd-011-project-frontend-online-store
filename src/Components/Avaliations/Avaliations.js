import React from 'react';
import PropTypes from 'prop-types';

class Avaliations extends React.Component {
  render() {
    const { avaliation: { email, message, rating } } = this.props;
    return (
      <div>
        <h4>
          { email }
        </h4>
        <h3>
          { message }
        </h3>
        <h3>
          { rating }
        </h3>
      </div>
    );
  }
}

Avaliations.propTypes = {
  avaliation: PropTypes.shape({
    email: PropTypes.string,
    message: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default Avaliations;
