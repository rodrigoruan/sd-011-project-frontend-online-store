import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="queryInput" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="queryInput" />
        </label>
      </form>
    );
  }
}

export default Home;
