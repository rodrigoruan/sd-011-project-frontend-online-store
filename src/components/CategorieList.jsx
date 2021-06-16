import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategorieList extends Component {
  render() {
    const { categorie: { name } } = this.props;
    return (
      <ul data-testid="category">
        <li>{ name }</li>
      </ul>
    );
  }
}

CategorieList.propTypes = {
  categorie: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
