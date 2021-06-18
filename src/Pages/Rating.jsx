import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div>
        <label htmlFor="rating">
          Avaliação
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Avalie o produto aqui :)"
            id="rating"
          />
        </label>
      </div>
    );
  }
}

export default Rating;
