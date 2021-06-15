import React from 'react';

class MainPage extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="input-search">
          <input
            name="input-search"
            type="text"
          />
        </label>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default MainPage;
