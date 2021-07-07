import React, { Component } from "react";

import "./Rating.css";

class Forms extends Component {
  render() {
    return (
      <aside className="rating-container">
        <h3 className="ui header">Deixe sua avaliação</h3>
        <form>
          <input placeholder="Email" type="text" />
          <input placeholder="Avalie o produto de 1 a 5" type="number" />
          <textarea
            placeholder="Deixe seu comentário sobre o produto"
            data-testid="product-detail-evaluation"
            rows="5"
          />
          <button className="ui button" type="button">
            Enviar
          </button>
        </form>
      </aside>
    );
  }
}
export default Forms;
