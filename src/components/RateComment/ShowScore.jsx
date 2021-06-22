import React from 'react';
import PropTypes from 'prop-types';

class ShowScore extends React.Component {
  render() {
    const { score: { rate, commentary } } = this.props;
    return (
      <section>
        <h3>{ rate }</h3>
        <h3>{ commentary }</h3>
      </section>
    );
  }
}

ShowScore.propTypes = {
  score: PropTypes.shape({
    rate: PropTypes.number,
    commentary: PropTypes.string,
  }).isRequired,
};

export default ShowScore;
