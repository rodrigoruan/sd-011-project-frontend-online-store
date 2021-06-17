import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Ops... this page does not exist!</h1>
        <div className="text-center">
          <img src="https://i.stack.imgur.com/6M513.png" alt="notFoundPicture" />
        </div>
      </div>
    );
  }
}
