import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cards extends Component {
  render() {
    const { resultSearch } = this.props;

    return (
      <div className="cards">
        { resultSearch.map(({ id, title }) => (
          <div data-testid="product" key={ id }>
            <p>{ title }</p>
          </div>
        )) }
      </div>
    );
  }
}

Cards.propTypes = {
  resultSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
};
