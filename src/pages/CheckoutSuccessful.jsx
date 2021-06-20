import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutSuccessful() {
  return (
    <div>
      <h1>Muito obrigado pela sua compra!</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
