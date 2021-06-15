import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <fragment>
        <h3
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </fragment>
    );
  }
}

export default Home;
