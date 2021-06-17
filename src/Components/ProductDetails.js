import React from 'react';

class ProductDetails extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email-id">
          <p>Email:</p>
          <input
            id="email-id"
            data-testid="product-detail-evaluation"
            type="e-mail"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="mensage-id">
          <p>Mensagem:</p>
          <input
            id="mensage-id"
            data-testid="product-detail-evaluation"
            type="e-mail"
            placeholder="Digite sua mensagem"
          />
        </label>
        <button
          id="avaiation-button"
          type="button"
        >
          Avaliar
        </button>
      </form>
    );
  }
}

export default ProductDetails;
