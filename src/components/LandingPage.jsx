import React from 'react';
import Categories from './Categories';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
        <Categories />
      </div>
    );
  }
}

export default LandingPage;
