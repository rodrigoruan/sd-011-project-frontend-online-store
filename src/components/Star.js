import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Star extends Component {
  render() {
    const { marked, starId } = this.props;

    return (
      <span data-star-id={ starId } className="star" role="button">
        {marked ? '\u2605' : '\u2606'}
      </span>
    );
  }
}

Star.propTypes = {
  marked: PropTypes.bool.isRequired,
  starId: PropTypes.number.isRequired,
};

export default Star;
