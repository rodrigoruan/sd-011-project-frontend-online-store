import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div>
        <label>
          Avaliação
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Avalie o produto aqui :)"
          />
        </label>
      </div>
    );
  }
}

export default Rating;
