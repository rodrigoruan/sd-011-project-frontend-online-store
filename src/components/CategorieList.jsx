import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategorieList extends Component {

  render() {
    const { categorie:  { name } } = this.props;
    return (
      <div>
        <h3>{ name }</h3>
      </div>
    );
  }
}
