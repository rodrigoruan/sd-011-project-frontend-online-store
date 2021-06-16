import React, { Component } from 'react';
import SearchBar from '../pages/SearchBar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar sendSubmit={this.props.sendSubmit} />
      </div>
    );
  }
}
