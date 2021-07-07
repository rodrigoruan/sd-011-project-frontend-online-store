import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StarRating extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { handleFormChange, readOnly } = this.props;

    if (!handleFormChange || readOnly) return;

    handleFormChange(e);
  }

  render() {
    const { rating, readOnly } = this.props;

    console.log(readOnly);

    return (
      <fieldset>
        <input
          type="radio"
          name="rating"
          value="1"
          onChange={ this.handleChange }
          checked={ rating === '1' }
          required
          readOnly={ readOnly }
        />
        <input
          type="radio"
          name="rating"
          value="2"
          onChange={ this.handleChange }
          checked={ rating === '2' }
          required
          readOnly={ readOnly }
        />
        <input
          type="radio"
          name="rating"
          value="3"
          onChange={ this.handleChange }
          checked={ rating === '3' }
          required
          readOnly={ readOnly }
        />
        <input
          type="radio"
          name="rating"
          value="4"
          onChange={ this.handleChange }
          checked={ rating === '4' }
          required
          readOnly={ readOnly }
        />
        <input
          type="radio"
          name="rating"
          value="5"
          onChange={ this.handleChange }
          checked={ rating === '5' }
          required
          readOnly={ readOnly }
        />
      </fieldset>
    );
  }
}

StarRating.defaultProps = {
  handleFormChange: null,
  readOnly: false,
};

StarRating.propTypes = {
  handleFormChange: PropTypes.func,
  rating: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
};
