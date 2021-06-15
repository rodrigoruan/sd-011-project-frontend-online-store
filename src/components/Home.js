import React from 'react';
import Category from './Category';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category />
      </div>
    );
  }
}

export default Home;
