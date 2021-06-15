import React from 'react';
import { SearchResults } from '../components';
import queryMock from '../__mocks__/query';

class Home extends React.Component {
  render() {
    // const { searchResults } = this.props;

    return (
      <main className="home-container">
        <section id="categories" className="home-one-fourth">

        </section>

        <SearchResults searchResults={ queryMock } />
      </main>
    );
  }
}
export default Home;
