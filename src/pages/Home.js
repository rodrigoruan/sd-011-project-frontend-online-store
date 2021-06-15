import React from 'react';
import { Link } from 'react-router-dom';
import listProductTerms from 'listProductTerms';

class Home extends React.Component {
  render() {
    return (
      
      <div>
      
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
