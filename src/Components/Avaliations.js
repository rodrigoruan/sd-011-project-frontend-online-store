import React from 'react';

class Avaliations extends React.Component {
  render() {
    const { eMail } = document.getElementById('email-id');
    const { mensage } = document.getElementById('mensage-id');
    const { rating } = document.getElementById('rating-id');

    return (
      <div>
        <h4>
          { eMail }
        </h4>
        <h3>
          { mensage }
        </h3>
        <h3>
          { rating }
        </h3>
      </div>
    );
  }
}

export default Avaliations;
