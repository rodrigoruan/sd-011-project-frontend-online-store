import React from 'react'

class Home extends React.Component {
  render() { 
    return (
      <div>
        <label htmlFor="search-input">
          <input type="text" name="search" id="search-input" />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </label>
      </div>
    );
  }
}
 
export default Home;