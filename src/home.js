import React from 'react';
import CategoriesBar from './CategoriesBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesBar />
      </div>
    );
  }
}

export default Home;
