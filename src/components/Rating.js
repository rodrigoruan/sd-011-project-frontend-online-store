import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <div>
        <form action="get">
          <span>Avaliações</span>
          <input placeholder="Email" type="text" />
          <input type="number" />
          <textarea placeholder="opcional" data-testid="product-detail-evaluation" />
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}
export default Forms;
