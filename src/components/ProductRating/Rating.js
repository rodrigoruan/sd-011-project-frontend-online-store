import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <div>
        <form action="get">
          <span>Avaliações</span>
          <input placeholder="Email" type="text" />
          <input placeholder="Avalie o producto de 1 a 5" type="number" />
          <textarea
            placeholder="opcional"
            data-testid="product-detail-evaluation"
            rows="5"
          />
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}
export default Forms;
