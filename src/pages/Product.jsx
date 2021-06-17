import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Especificações do produto
      </div>
    );
  }
}
