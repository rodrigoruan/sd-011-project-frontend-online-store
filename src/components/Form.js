import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <h2>Avaliar</h2>
        <form>
          <div>
            <input
              data-testid="product-detail-evaluation"
              type="email"
              pattern="^[\w_.]{6,}@[a-z]{5,}.com(.br)?$"
              name="email"
              required
            />
            <input type="radio" name="review" value="1" required />
            <input type="radio" name="review" value="2" required />
            <input type="radio" name="review" value="3" required />
            <input type="radio" name="review" value="4" required />
            <input type="radio" name="review" value="5" required />
          </div>
          <div>
            <textarea name="comment" cols="30" rows="10" />
          </div>
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}
