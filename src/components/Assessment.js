import React, { Component } from 'react'
/*req 11  */
export default class Assessment extends Component {
    render() {
        return (
            <form>
      
              <h2>Avaliações</h2>
      
              <label htmlFor="email">
                <input
                  type="text"
                  placeholder="Digite seu email"
                  id="email"
                  name="email"
                  required
                />
              </label>
      
              <label htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  data-testid="product-detail-evaluation"
                  placeholder="Deixe seu comentário (opcional)"
                />
              </label>
      
              <label htmlFor="avaliacao">
                <input type="number" min="1" max="5" required />
              </label>
              <button type="submit">Avaliar</button>
            </form>
        )
    }
}
