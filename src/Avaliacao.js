import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  // Component avaliacao
  render() {
    const { avaliacao: { rating, commentary } } = this.props;
    return (
      <div>
        <h3>{ rating }</h3>
        <p>{ commentary }</p>
      </div>
    );
  }
}

Avaliacao.propTypes = {
  avaliacao: PropTypes.shape({
    rating: PropTypes.number,
    commentary: PropTypes.string,
  }).isRequired,
};

export default Avaliacao;
