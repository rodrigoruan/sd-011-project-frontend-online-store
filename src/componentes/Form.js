import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form>
        <h2>Avaliações</h2>
        <fieldset>
          <input type="email" name="email" placeholder="Email" />
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label data-testid="product-detail-evaluation">
            <textarea type="text" placeholder="Mensagem(opcional)" />
          </label>
          <button type="button">Avaliar</button>
        </fieldset>
      </form>
    )
  }
}

export default Form;
