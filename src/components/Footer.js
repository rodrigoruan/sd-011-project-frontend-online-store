import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="py-4 bg-dark flex-shrink-0 fixed-bottom">
        <div className="container text-center">
          <a href="/" className="text-muted">
            Made by Main-Group-10
          </a>
        </div>
      </footer>
    );
  }
}
