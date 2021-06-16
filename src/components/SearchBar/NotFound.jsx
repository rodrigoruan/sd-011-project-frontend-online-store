import React, { Component } from 'react';
import './SearchBar.css';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <p className="notFoundP">Não encontrado produtos com esse termo.</p>
      </div>
    );
  }
}
